import os
import shutil
import glob
import yaml


def main():
  with open(f"scopes.yaml", "r") as file:
    content = yaml.load(file)

  # `make directory tree` : languages
  if not os.path.exists(f"languages"):
    os.makedirs(f"languages")
  

  for key, value in content.items():
    with open(f"languages/{key}.sublime-snippet", "w") as file:
      file.write(f"""<snippet>
  <content><![CDATA[
 
]]></content>
  <tabTrigger>TRIGGER</tabTrigger>
  <scope>{value}</scope>
</snippet>""")
    


if __name__ == '__main__':
  main()