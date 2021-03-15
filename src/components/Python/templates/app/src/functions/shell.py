import os
import shutil
import glob
import yaml
import sys


def cd(path):
  """ 
    ======================================
      Change current working directory.
    ======================================
  """
  if os.path.exists(f"{path}"):
    os.chdir(f"{path}")

# <---------------------------->

def ls(path):
  """ 
    ======================================
      List contents of directory.
    ======================================
  """
  return os.listdir(path)

# <---------------------------->
  
def mkdir(path):
  """ 
    ======================================
      Create a new directory.
    ======================================
  """
  if not os.path.exists(f"{path}"):
    os.makedirs(f"{path}")

# <---------------------------->

def touch(path):
  """ 
    ======================================
      Create an empty file.
    ======================================
  """
  if not os.path.exists(f"{path}"):
    with open(f"{path}", "w") as file:
      pass

# <---------------------------->

def readyaml(path):
  """ 
    ======================================
      Read a YAML file.
    ======================================
  """
  with open(f"{path}", "r") as file:
    content = yaml.load(file, Loader = yaml.FullLoader)
  return content

# <---------------------------->

def rmdir(path):
  """ 
    ======================================
      Delete directory tree.
    ======================================
  """
  if os.path.exists(f"{path}"):
      shutil.rmtree(f"{path}")

# <---------------------------->

def delete(path):
  """ 
    ======================================
      Remove a file.
    ======================================
  """
  if os.path.exists(f"{path}"):
    os.remove(f"{path}")

# <---------------------------->

def rmac(path):
  """ 
    ======================================
      Remove everything inside present 
      working directory.
    ======================================
  """
  for f in os.listdir():
    if os.path.isfile(f"{f}"):
      os.remove(f)
    elif os.path.isdir(f"{f}"):
      shutil.rmtree(f"{f}")

def package(file):
  sys.path.append(os.path.dirname(os.path.dirname(os.path.realpath(file))))
