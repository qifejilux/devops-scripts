import logging
import os
import re
import subprocess
import sys

class Utils:
    @staticmethod
    def get_kube_config_context(cluster_name):
        """Retrieves the Kubernetes context name from the config file."""
        try:
            kube_config_path = os.environ.get('KUBECONFIG')
            if kube_config_path:
                with open(kube_config_path, 'r') as f:
                    config = f.read()
                    match = re.search(r'contexts:\n\s*- name: "([^"]+)"', config)
                    if match:
                        context = match.group(1)
                        return context
        except Exception as e:
            logging.error(f"Error retrieving Kubernetes context: {e}")
        return None

    @staticmethod
    def run_command(command):
        """Runs a shell command and returns the output."""
        try:
            output = subprocess.check_output(command, shell=True)
            return output.decode('utf-8').strip()
        except subprocess.CalledProcessError as e:
            logging.error(f"Error running command: {e}")
            return None

    @staticmethod
    def check_error(output):
        """Checks if the output contains any errors."""
        if output and 'error' in output.lower():
            logging.error(f"Error found in output: {output}")
            sys.exit(1)

    @staticmethod
    def get_hostname():
        """Retrieves the hostname of the machine."""
        try:
            hostname = subprocess.check_output(['hostname']).decode('utf-8').strip()
            return hostname
        except subprocess.CalledProcessError:
            logging.error("Failed to retrieve hostname")
            return None