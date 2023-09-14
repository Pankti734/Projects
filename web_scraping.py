import requests
from bs4 import BeautifulSoup

response=requests.get(url="https://web.archive.org/web/20200518073855/https://www.empireonline.com/movies/features/best-movies-2/")
contents=response.text

soup=BeautifulSoup(contents,'html.parser')
all_tags=soup.find_all(name="h3",class_="title")
tags=[]
for tag in all_tags:
    text=tag.getText()
    tags.append(text)
list_str='\n'.join(map(str,tags))

with open('movies.txt','w', encoding='utf-8') as filep:
 filep.write(list_str)
 filep.close()