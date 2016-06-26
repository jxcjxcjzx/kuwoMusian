__author__ = 'jxcjxcjzx'
#coding:utf-8
import os
import re
import time
import codecs
import requests
import simplejson
from bs4 import BeautifulSoup


PATH = os.path.dirname(os.path.abspath(__file__))


def get_hot_singer_url():
  ''' get url of all singers'''
	kuwo_music_url = 'http://www.kuwo.cn/artist/index';
	html = requests.get(kuwo_music_url,timeout=20).text;
	soup = BeautifulSoup(html);
	li_url_list = [];
	ul_level_list = soup.
