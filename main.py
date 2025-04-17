try:
	import os 
	import subprocess

	import wolframalpha

	import pyttsx3

	import tkinter

	import keyboard

	from keyboard import press 

	from keyboard import write

	from time import sleep

	import json

	# import clint

	import psutil

	import platform

	import random

	import requests

	from bs4 import BeautifulSoup

	import bs4

	import screen_brightness_control as sbc

	import operator

	import speech_recognition as sr

	import datetime

	import wikipedia

	import webbrowser

	import os

	from os import spawnle, startfile

	from pyautogui import click

	import keyboard

	from keyboard import press 

	from keyboard import write

	from time import sleep

	import winshell

	import pyjokes

	# import feedparser

	import smtplib

	import ctypes

	import time

	import requests

	import shutil

	# from twilio.rest import Client

	# from clint.textui import progress

	from bs4 import BeautifulSoup

	import win32com.client as wincl
	try:
		import playsound
	except:
		import pygame

	from urllib.request import urlopen
except:
	import os
	try:
		os.system('pip install -r requirements.txt')
	except:
		pass
	import subprocess

	import wolframalpha

	import pyttsx3

	import tkinter

	import keyboard
	try:
		import playsound
	except:
		import pygame

	from keyboard import press 

	from keyboard import write

	from time import sleep

	import json

	# import clint

	import psutil

	import platform

	import random

	import requests

	from bs4 import BeautifulSoup

	import bs4

	import screen_brightness_control as sbc

	import operator

	import speech_recognition as sr

	import datetime

	import wikipedia

	import webbrowser

	import os

	from os import spawnle, startfile

	from pyautogui import click

	import keyboard

	from keyboard import press 

	from keyboard import write

	from time import sleep

	import winshell

	import pyjokes

	# import feedparser

	import smtplib

	import ctypes

	import time

	import requests

	import shutil

	# from twilio.rest import Client

	# from clint.textui import progress

	from bs4 import BeautifulSoup

	import win32com.client as wincl

	from urllib.request import urlopen




engine = pyttsx3.init('sapi5')
voices = engine.getProperty('voices')
engine.setProperty('voice', voices[0].id)


owner = "ADNAN"
my_current_location = "Hyderabad"


def speak(audio):
    engine.say(audio)
    engine.runAndWait()

import pygame
import threading

def play_audio_background(file_path: str, volume: float = 0.1):
    def _play():
        pygame.init()
        pygame.mixer.init(frequency=44100, size=-16, channels=2, buffer=4096)
        try:
            pygame.mixer.music.load(file_path)
            pygame.mixer.music.set_volume(volume)  # Lower volume for background music
            pygame.mixer.music.play()
        except pygame.error as e:
            print(f"Error loading or playing sound: {e}")

    # Start background audio in a new thread
    threading.Thread(target=_play, daemon=True).start()


def wishMe():
    hour = int(datetime.datetime.now().hour)
    if hour>= 0 and hour<12:
        speak("Good Morning Sir !" )
  
    elif hour>= 12 and hour<16:
        speak("Good Afternoon Sir !" )  
  
    else:
        speak("Good Evening Sir !" ) 

speak("initializing jarvis")
# play_audio_background("./assets/iron Man initializations.mp3")
# wishMe()
# speak("starting all system applications")
# speak("installing and checking all drivers")
# speak("calibrating and analysing all the core processors")
# speak("checking the internet connection")
url = "http://www.youtube.com"
timeout = 5
try:
	request = requests.get(url, timeout=timeout)
	print("Connected to the Internet")
	# speak("INTERNET connection detected")
	# speak("all drivers are up and running , all systems have been activated")
	# speak("now i am online")
except (requests.ConnectionError, requests.Timeout) as exception:
	print("No internet connection  ")
	speak("No internet connection detected .")
	speak("Shutting down the program.")
	speak("Thanks for giving me your time")
	try:
		playsound("./assets/power down.mp3")
	except:
		play_audio_background("./assets/power down.mp3")

	exit()



speak("How can i Help you Sir")

 
def takeCommand():
     
    r = sr.Recognizer()
     
    with sr.Microphone() as source:
         
        print("Listening...")
        r.pause_threshold = 1
        audio = r.listen(source)
  
    try:
        print("Recognizing...")   
        query = r.recognize_google(audio, language ='en-in')
        print(f"User said: {query}\n")
		
  
    except Exception as e:
        print(e)   
        print("Unable to Recognize your voice.") 
        return "None"
     
    return query


def wolfram(query):
    api_key = "4Y594Q-5TAGRTVW86"
    requester = wolframalpha.Client(api_key)
    requested = requester.query(query)

    try:
        answer = next(requested.results).text
        return answer

    except:
        speak("no data found")


def calculator(query):

    term = str(query)
    term = term.replace("jarvis","")
    term = term.replace("plus","+")
    term = term.replace("minus","-") 
    term = term.replace("multiply","*")
    term = term.replace("divide","/")
    term = term.replace("into","*")

    final = str(term)

    try:    
        result1 = wolfram(final)
        print(F"{result1}")
        speak(F"{result1}")
    except:
        speak("sorry, i don't have the answer for that .....")


def blender():
	speak("launching blender")
	os.system("blender")


def temp(query):

    term = str(query)
    term = term.replace("jarvis","")
    term = term.replace("temperature","")
    term = term.replace("in","")
    term = term.replace("what is the","")

    temp_query = str(term)

    if 'outside' in query:
        var1 = 'temperature in' + my_current_location

        answer = wolfram(var1)
        print(f"{var1} Is {answer}")
        speak(f"{var1} Is {answer}")

    else : 
        var2 = 'temperature in' + temp_query

        answ = wolfram(var2)
        print(f"{var2} Is{answ}")
        speak(f"{var2} Is{answ}")


def sendEmail(to, content):
    server = smtplib.SMTP('smtp.gmail.com', 587)
    server.ehlo()
    server.starttls()
     
    # Enable low security in gmail
    server.login('your email id', 'your email password')
    server.sendmail('your email id', to, content)
    server.close()


def get_size(bytes, suffix="B"):
    """
    Scale bytes to its proper format
    e.g:
        1253656 => '1.20MB'
        1253656678 => '1.17GB'
    """
    factor = 1024
    for unit in ["", "K", "M", "G", "T", "P"]:
        if bytes < factor:
            return f"{bytes:.2f}{unit}{suffix}"
        bytes /= factor


def bluetooth_switch_on():
	speak("switching on bluetooth")
	click(x=1885, y=1061)
	sleep(1)
	click(x=1416, y=752)
	sleep(2)
	speak("connecting to the bluetooth device")


def battery_saver_switch_on():
	speak("switching on battery saver mode")
	click(x=1885, y=1061)
	sleep(1)
	click(x=1712, y=732)


def location_switch_on():
	click(x=1885, y=1061)
	sleep(1)
	click(x=1464, y=647)


def night_light_mode_on():
	speak("switching on night light mode")
	click(x=1885, y=1061)
	sleep(1)
	click(x=1825, y=644)





if __name__ == '__main__':
	clear = lambda: os.system('cls')
	
	# This Function will clean any
	# command before execution of this python file
	clear()
	wishMe()
	
	
	while True:

		
		query = takeCommand().lower()
		
		if 'wikipedia' in query:
			speak('Searching Wikipedia...')
			try:
				query = query.replace("wikipedia", "")
				results = wikipedia.summary(query, sentences = 3)
				speak("According to Wikipedia")
				print(results)
				speak(results)
			except Exception as e:
				print("Error: ", e)


		elif 'open youtube' in query:
			speak("Here you go to Youtube\n")
			webbrowser.open("https://www.youtube.com/")


		elif 'open google' in query:
			speak("Here you go to Google\n")
			webbrowser.open("https://www.google.com/")

		elif 'the time' in query:
			from datetime import datetime
			now = datetime.now()
			current_time = now.strftime("%H:%M:%S")
			speak("the time is now" )
			speak(current_time)
			

		elif 'how are you' in query:
			speak("My AI mood levels are always positive .")
			speak("How are you, Sir")


		elif 'fine' in query:
			speak("It's good to know that your fine sir .")


		elif "what's your name"  in query:
			speak("My friends call me")
			speak("jarvis")
			print("My friends call me jarvis ")

		
		elif 'none' in query:
			sleep(1)
			speak("unable to recognise your voice ..")


		elif 'exit' in query:
			speak("Thanks for giving me your time")
			exit()


		elif "who made you" in query or "who created you" in query:
			speak("I have been created by ADNAN .")
			

		elif 'joke' in query:
			print(pyjokes.get_joke())
			speak(pyjokes.get_joke())
			

		elif 'search'  in query:
			query = query.replace("search", "")
			query = query.replace("jarvis","")
			speak("searching")
			speak(query)
			speak("in google")
			webbrowser.open("https://www.google.com/search?q=" + query)


		elif "who i am" in query:
			speak("If you talk then definately your human.")


		elif "why you came to world" in query:
			speak("Thanks to ADNAN. further It's a secret")


		elif "who are you" in query:
			speak("I am your virtual assistant created by ADNAN")


		elif 'reason for you' in query:
			speak("I was coded by Mister ADNAN ")


		elif 'change background' in query:
			ctypes.windll.user32.SystemParametersInfoW(20,
													0,
													"Location of wallpaper",
													0)
			speak("Background changed succesfully")

		
		elif 'lock window' in query:
			speak("locking the device")
			ctypes.windll.user32.LockWorkStation()


		elif 'shutdown system' in query:
			speak("Hold On a Sec ! Your system is on its way to shut down")
			subprocess.call('shutdown / p /f')


		elif 'empty recycle bin' in query:
			winshell.recycle_bin().empty(confirm = False, show_progress = False, sound = True)
			sleep(1)
			speak("Recycle Bin Recycled")


		elif "stop listening" in query:
			speak("for how much time you want to stop jarvis from listening commands")
			a = int(takeCommand())
			time.sleep(a)
			print(a)
			speak("i am back sir ! ")


		elif "where is" in query:
			query = query.replace("where is", "")
			query = query.replace("jarvis","")
			location = query
			speak("User asked to Locate")
			speak(location)
			webbrowser.open("http://www.google.com/maps/place/"+location)


		elif "restart" in query:
			subprocess.call(["shutdown", "/r"])
			

		elif "hibernate" in query or "sleep" in query:
			speak("Hibernating")
			subprocess.call("shutdown / h")


		elif "log off" in query or "sign out" in query:
			speak("Make sure all the application are closed before sign-out")
			time.sleep(5)
			subprocess.call(["shutdown", "/l"])


		elif "write a note" in query:
			speak("What should i write, sir")
			note = takeCommand()
			file = open('jarvis.txt', 'w')
			speak("Sir, Should i include date and time")
			snfm = takeCommand()
			if 'yes' in snfm or 'sure' in snfm:
				strTime = str(datetime.datetime.now().strftime("%H:%M:%S"))
				file.write(strTime)
				file.write(" :- ")
				file.write(note)
			else:
				file.write(note)
		

		elif "show note" in query:
			speak("Showing Notes")
			file = open("jarvis.txt", "r")
			print(file.read())
			speak(file.read(6))


		elif 'hello' in query:
			speak("hello sir i am your digital assistant , how can i help you ?")


		elif 'date' in query:
			from datetime import date
			today = date.today()
			d2 = today.strftime("%B %d, %Y")
			speak("today's date is")
			speak(d2)


		elif 'system information' in query:
			print("="*40, "System Information", "="*40)
			speak("System Information")
			uname = platform.uname()
			print(f"System: {uname.system}")
			speak(f"System: {uname.system}")
			print(f"Node Name: {uname.node}")
			speak(f"Node Name: {uname.node}")
			print(f"Release: {uname.release}")
			speak(f"Release: {uname.release}")
			print(f"Version: {uname.version}")
			speak(f"Version: {uname.version}")
			print(f"Machine: {uname.machine}")
			speak(f"Machine: {uname.machine}")
			print(f"Processor: {uname.processor}")
			speak(f"Processor: {uname.processor}")


		elif 'cpu information' in query:
			print("="*40, "CPU Info", "="*40)
			# number of cores
			print("Physical cores:", psutil.cpu_count(logical=False))
			speak("this cpu has")
			speak( psutil.cpu_count(logical=False))
			speak("physical cores")
			print("Total cores:", psutil.cpu_count(logical=True))
			speak("and total number of cores are")
			speak(psutil.cpu_count(logical=True))


		elif 'frequency of cpu' in query:
			cpufreq = psutil.cpu_freq()
			print(f"Max Frequency: {cpufreq.max:.2f}Mhz")
			speak(f"Max Frequency: {cpufreq.max:.2f}Mhz")
			print(f"Min Frequency: {cpufreq.min:.2f}Mhz")
			speak(f"Min Frequency: {cpufreq.min:.2f}Mhz")
			print(f"Current Frequency: {cpufreq.current:.2f}Mhz")
			speak(f"Current Frequency: {cpufreq.current:.2f}Mhz")


		elif 'usage of cpu' in query:
			# CPU usage
			print("CPU Usage Per Core:")
			speak("the cpu usage per core is")
			for i, percentage in enumerate(psutil.cpu_percent(percpu=True, interval=1)):		
    				print(f"Core {i}: {percentage}%")
			total_cpu = psutil.cpu_percent()
			speak(f"Core {i}: {percentage}%")
			print(f"Total CPU Usage: {total_cpu}%")
			speak(f"Total CPU Usage: {total_cpu}%")


		elif 'memory information' in query:
			# Memory Information
			print("="*40, "Memory Information", "="*40)
			speak("the memory information of this computer is")
			# get the memory details
			svmem = psutil.virtual_memory()
			print(f"Total: {get_size(svmem.total)}")
			speak(f"Total: {get_size(svmem.total)}")
			print(f"Available: {get_size(svmem.available)}")
			speak(f"Available: {get_size(svmem.available)}")
			print(f"Used: {get_size(svmem.used)}")
			speak(f"Used: {get_size(svmem.used)}")
			print(f"Percentage: {svmem.percent}%")
			speak(f"Percentage: {svmem.percent}%")
			print("="*20, "SWAP", "="*20)
			# get the swap memory details (if exists)
			speak('the swap memory details are')
			swap = psutil.swap_memory()
			print(f"Total: {get_size(swap.total)}")
			speak(f"Total: {get_size(swap.total)}")
			print(f"Free: {get_size(swap.free)}")
			speak(f"Free: {get_size(swap.free)}")
			print(f"Used: {get_size(swap.used)}")
			speak(f"Used: {get_size(swap.used)}")
			print(f"Percentage: {swap.percent}%")
			speak(f"Percentage: {swap.percent}%")


		elif 'network information' in query:
			# Network information
			print("="*40, "Network Information", "="*40)
			# get all network interfaces (virtual and physical)
			if_addrs = psutil.net_if_addrs()
			for interface_name, interface_addresses in if_addrs.items():
				for address in interface_addresses:
					print(f"=== Interface: {interface_name} ===")
					if str(address.family) == 'AddressFamily.AF_INET':
						print(f"  IP Address: {address.address}")
						speak(f"  IP Address: {address.address}")
						print(f"  Netmask: {address.netmask}")
						speak(f"  Netmask: {address.netmask}")
						print(f"  Broadcast IP: {address.broadcast}")
						speak(f"  Broadcast IP: {address.broadcast}")
					elif str(address.family) == 'AddressFamily.AF_PACKET':
						print(f"  MAC Address: {address.address}")
						speak(f"  MAC Address: {address.address}")
						print(f"  Netmask: {address.netmask}")
						speak(f"  Netmask: {address.netmask}")
						print(f"  Broadcast MAC: {address.broadcast}")
						speak(f"  Broadcast MAC: {address.broadcast}")
			# get IO statistics since boot
			speak("The IO statistics since boot")
			net_io = psutil.net_io_counters()
			print(f"Total Bytes Sent: {get_size(net_io.bytes_sent)}")
			speak(f"Total Bytes Sent: {get_size(net_io.bytes_sent)}")
			print(f"Total Bytes Received: {get_size(net_io.bytes_recv)}")
			speak(f"Total Bytes Received: {get_size(net_io.bytes_recv)}")


		elif  'launch powerpoint' in query:
			speak("launching microsoft powerpoint")
			os.system("powerpnt")


		elif 'my youtube channel' in query:
			speak("going to HOBBY MASTER youtube channel")
			webbrowser.open("https://www.youtube.com/channel/UC9wt9ih0-acWfeWXLI5oDIQ")
			# speak("make sure you subscribe to the channel")


		elif 'launch chrome' in query:
			speak("launching google chrome browser")
			os.system('taskkill /im chrome.exe')
			os.system('start chrome  --kiosk')


		elif 'device location' in query:
			location_switch_on()

		
		elif 'news' in query:
			toi_r = requests.get("https://timesofindia.indiatimes.com/briefs")
			toi_soup = BeautifulSoup(toi_r.content, 'html5lib')
			toi_headings = toi_soup.find_all('h2')
			toi_headings = toi_headings[0:-13] # removing footers
			toi_news = []
			for th in toi_headings:
				toi_news.append(th.text)
			for news in toi_news:
				print(news)
				speak(news)


		elif 'weather' in query:
			#query = query.replace("weather", "")
			#city = query
			city = "guwahati"
			url = "https://www.google.com/search?q="+"weather"+city
			html = requests.get(url).content
			soup = BeautifulSoup(html, 'html.parser')
			temp = soup.find('div', attrs={'class': 'BNeawe iBp4i AP7Wnd'}).text
			str = soup.find('div', attrs={'class': 'BNeawe tAd8D AP7Wnd'}).text
			data = str.split('\n')
			time = data[0]
			sky = data[1]
			listdiv = soup.findAll('div', attrs={'class': 'BNeawe s3v9rd AP7Wnd'})
			strd = listdiv[5].text
			pos = strd.find('Wind')
			other_data = strd[pos:]
			print("Temperature is", temp)
			speak("The temperature is")
			speak(temp)
			print("Sky Description: ", sky)
			speak("the sky description is")
			speak(sky)
			print(other_data)
			speak(other_data)

		
		#elif "calculate" in query:
			#playsound("C:\\Users\\ALI\\OneDrive\Desktop\\jarvis\\database_jarvis_highly_integrated_smart_data\\audio_files_database\\system_sound_effects\\google_now_voice.mp3")
			
		#	app_id = "4Y594Q-5TAGRTVW86"
		#	client = wolframalpha.Client(app_id)
		#	indx = query.lower().split().index('calculate')
		#	query = query.split()[indx + 1:]
		#	res = client.query(' '.join(query))
		#	answer = next(res.results).text
		#	print("The answer is " + answer)
		#	speak("The answer is " + answer)

		elif 'calculate' in query:
			calculator(query)


		elif 'temperature' in query:
			temp(query)


		elif 'night light mode' in query:
			night_light_mode_on()


		elif 'battery saver' in query:
			battery_saver_switch_on()


		elif "what is"  in query:
			client = wolframalpha.Client("4Y594Q-5TAGRTVW86")
			res = client.query(query)
			try:
				print(next(res.results).text)
				speak (next(res.results).text)

			except StopIteration:
				print ("No results")
				speak("sorry , i don't have the answer for that ..")

		
		#elif 'bluetooth' or 'connect to bluetooth speaker' in query :
		#	bluetooth_switch_on()

          #  client = wolframalpha.Client("4Y594Q-5TAGRTVW86")
        #    res = client.query(query)
             
         ##   try:
         #       print (next(res.results).text)
          #      speak (next(res.results).text)
          #  except StopIteration:
           #     print ("No results")

		


		#elif '' in query:

	
		# elif "" in query:
			# Command go here
			# For adding more commands
