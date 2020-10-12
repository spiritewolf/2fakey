import time
import requests
import json
import time
from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver import Firefox
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.firefox.options import Options
from sumy.parsers.html import *
from sumy.parsers.plaintext import PlaintextParser
from sumy.nlp.tokenizers import Tokenizer

from sumy.summarizers.luhn import LuhnSummarizer as Summarizer
from sumy.summarizers.lex_rank import LexRankSummarizer
from sumy.nlp.stemmers import Stemmer
from sumy.utils import get_stop_words

from .serializers import ResultSerializer
from .models import Scraper

options = Options()
options.add_argument('--headless')

def get_search(input):
    extras = input.split(' ')
    driver = webdriver.Firefox(executable_path='/Users/k80/Dev/geckodriver', options=options)
    driver.get("https://www.google.com/")
    search = driver.find_element_by_name('q')
    search.send_keys(input)
    search.send_keys(Keys.RETURN)
    try:
        time.sleep(3)
        result = driver.find_element_by_tag_name("cite").click()
        url_name = driver.current_url
        print(url_name)
    except Exception as e:
        print(e)
        driver.quit()
    driver.quit()
    return get_content(url_name, extras)

def get_content(url_name, extras):
    LANGUAGE = "english"
    SENTENCES_COUNT = 5
    url = str(url_name)
    parser = HtmlParser.from_url(url, Tokenizer(LANGUAGE))
    summarizer = Summarizer(Stemmer(LANGUAGE))
    summarizer.stop_words = extras
    try:
        result = []
        for sentence in summarizer(parser.document, SENTENCES_COUNT):
            result.append(str(sentence))
        result = ' '.join(map(str, result))
        return {'result': result, 'source': url}
    except Exception as e:
        print('fail: ', e)
    return extras, sentence
