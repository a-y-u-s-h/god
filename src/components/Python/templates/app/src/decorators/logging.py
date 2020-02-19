import os
import datetime
import logging

def log(f):
  """ 
    ======================================
      A decorator to log functions -
      - their arguments, and return values.
      Generates a file for every run.
    ======================================
  """

  def log(*args, **kwargs):
    result = f(*args, **kwargs)
    
    path = os.path.join(os.getcwd(), "data", "logs")
    if not os.path.exists(path):
      os.makedirs(path)
    
    file = os.path.join(path, f"{datetime.datetime.now():%d %B %Y}.log")

    for handler in logging.root.handlers[:]:
      logging.root.removeHandler(handler)
      
    logging.basicConfig(
      filename = file,
      level = logging.DEBUG,
      format= f"time: %(asctime)s | function: {f.__name__} | args: {args} | kwargs: {kwargs} | %(message)s"  
    )

    logging.debug(f"result: {result}")
    return result
  return log

# <============================>
