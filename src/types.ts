import * as fs from 'fs';
import * as path from 'path';

interface File {
  name: string;
  path: string;
  size: number;
  lastModified: number;
}

interface Directory {
  name: string;
  path: string;
  files: File[];
  subdirectories: Directory[];
}

interface DirectoryEntry {
  name: string;
  path: string;
  size: number;
  lastModified: number;
}

class DirectoryEntry {
  constructor(name: string, path: string, size: number, lastModified: number) {
    this.name = name;
    this.path = path;
    this.size = size;
    this.lastModified = lastModified;
  }
}

class File {
  constructor(name: string, path: string, size: number, lastModified: number) {
    this.name = name;
    this.path = path;
    this.size = size;
    this.lastModified = lastModified;
  }
}

class Directory {
  constructor(name: string, path: string, files: File[], subdirectories: Directory[]) {
    this.name = name;
    this.path = path;
    this.files = files;
    this.subdirectories = subdirectories;
  }
}