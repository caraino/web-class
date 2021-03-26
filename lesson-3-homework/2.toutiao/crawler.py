import requests
import json

url = 'https://www.toutiao.com/api/pc/feed/'
wbdata = requests.get(url).text

data = json.loads(wbdata)
news = data['data']

for n in news:
  if("image_url" in n):
    img_url= "https:" + n['image_url']
  else:
    img_url="null"

  if ("comments_count" in n):
    comments = n['comments_count']
  else:
    comments = 0

  result={
    "title" : n['title'],
    "img_url" :img_url,
    "url" : "https://www.toutiao.com"+n['media_url'],
    "tag" : n['chinese_tag'],
    "source" : n['source'],
    "source_img":"https:"+n['media_avatar_url'],
    "source_url" : "https://www.toutiao.com"+n['source_url'],
    "comments" : n['comments_count'],
    "time" : n['behot_time'],
    # "video_time":n['video_duration_str']
  }

  print(result)