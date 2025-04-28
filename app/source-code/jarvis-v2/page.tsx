"use client";
import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaYoutube, FaInstagram } from 'react-icons/fa';
import { BiDonateHeart } from 'react-icons/bi';
import { MdCode, MdOutlineLibraryBooks, MdOutlineQuestionAnswer, MdPlayArrow } from 'react-icons/md';
import Footer from '@/components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import DonationModal from '@/components/DonationModal';
import Navbar from '@/components/source-code-components/jarvis/v2/Navbar';
import Hero from '@/components/source-code-components/jarvis/v2/Hero';

const Page: React.FC = () => {
  const [showNav, setShowNav] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>("overview");
  const [showDonationModal, setShowDonationModal] = useState<boolean>(false);

  const toggleNavbar = () => {
    setShowNav(prevShowNav => !prevShowNav);
  };

  useEffect(() => {
    // Set body background color to black
    document.body.style.backgroundColor = '#0a0a0a';
    document.body.style.color = '#e0e0e0';
    
    // Prevent scrolling when mobile menu is open
    if (showNav) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    // Cleanup function
    return () => {
      document.body.style.backgroundColor = '';
      document.body.style.color = '';
      document.body.style.overflow = '';
    };
  }, [showNav]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
    if (showNav) setShowNav(false);
  };

  // Mobile menu animation variants
  const menuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    },
    open: {
      opacity: 1,
      x: "0%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
        staggerChildren: 0.07,
        delayChildren: 0.2
      }
    }
  };

  const menuItemVariants = {
    closed: { 
      opacity: 0, 
      y: 20,
      transition: { duration: 0.2 } 
    },
    open: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.2 } 
    }
  };

  return (
    <>
      <div className="font-sans antialiased text-gray-200 min-h-screen bg-gradient-to-b from-gray-900 to-black">
        {/* Navigation */}
        <Navbar/>
        
        {/* Hero Section */}
        <Hero/>
        
        {/* Main Content */}
        <div className="container mx-auto px-4 py-12">
          {/* Rest of the content remains the same */}
          {/* Overview Section */}
          <section id="overview" className="mb-20">
            <div className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-sm p-8 rounded-xl border border-gray-700 shadow-xl">
              <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 flex items-center">
                <MdOutlineLibraryBooks className="mr-2 text-cyan-400" /> Overview
              </h2>
              <p className="text-lg mb-6">
                JARVIS (Just A Rather Very Intelligent System) is a Python-based voice-controlled AI assistant inspired by the AI system from the Iron Man movies. This project aims to create a personal assistant that can perform various tasks through voice commands, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                <li>Answering questions using Wolfram Alpha and Wikipedia</li>
                <li>Performing system operations (shutdown, restart, etc.)</li>
                <li>Retrieving weather information</li>
                <li>Opening applications and websites</li>
                <li>Providing system information</li>
                <li>Controlling system settings (brightness, Bluetooth, etc.)</li>
                <li>Performing calculations</li>
                <li>Reading news headlines</li>
              </ul>
            </div>
          </section>
          
          {/* Installation Section */}
          <section id="installation" className="mb-20">
            <div className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-sm p-8 rounded-xl border border-gray-700 shadow-xl">
              <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Installation</h2>
              
              <h3 className="text-xl font-semibold mb-4 text-cyan-300">Prerequisites</h3>
              <p className="mb-4">Make sure you have Python 3.6+ installed on your system.</p>
              
              <h3 className="text-xl font-semibold mb-4 text-cyan-300">Step 1: Clone the Repository</h3>
              <div className="bg-gray-900 p-4 rounded-md mb-6 overflow-x-auto">
                <pre className="text-gray-300">
                  <code>git clone https://github.com/Adnan-The-Coder/jarvis-build-v1</code>
                </pre>
              </div>
              
              <h3 className="text-xl font-semibold mb-4 text-cyan-300">Step 2: Install Dependencies</h3>
              <p className="mb-4">The script will attempt to install required packages automatically, but you can also install them manually:</p>
              <div className="bg-gray-900 p-4 rounded-md mb-6 overflow-x-auto">
                <pre className="text-gray-300">
                  <code>pip install -r requirements.txt</code>
                </pre>
              </div>
              
              <h3 className="text-xl font-semibold mb-4 text-cyan-300">Step 3: API Keys</h3>
              <p className="mb-4">For full functionality, you'll need to obtain the following API keys:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-300 mb-6">
                <li>Wolfram Alpha API key (currently set to "4Y594Q-5TAGRTVW86" in the code)</li>
              </ul>
              
              <h3 className="text-xl font-semibold mb-4 text-cyan-300">Step 4: Run the Assistant</h3>
              <div className="bg-gray-900 p-4 rounded-md mb-6 overflow-x-auto">
                <pre className="text-gray-300">
                  <code>python main.py</code>
                </pre>
              </div>
            </div>
          </section>
          
          {/* Features Section */}
          <section id="features" className="mb-20">
            <div className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-sm p-8 rounded-xl border border-gray-700 shadow-xl">
              <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Features</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-900 bg-opacity-60 p-6 rounded-lg border border-gray-700">
                  <h3 className="text-xl font-semibold mb-3 text-cyan-300">Voice Recognition</h3>
                  <p>Uses Google's Speech Recognition API to convert speech to text for processing commands.</p>
                </div>
                
                <div className="bg-gray-900 bg-opacity-60 p-6 rounded-lg border border-gray-700">
                  <h3 className="text-xl font-semibold mb-3 text-cyan-300">Knowledge Base</h3>
                  <p>Integrates with Wolfram Alpha and Wikipedia to answer questions and provide information.</p>
                </div>
                
                <div className="bg-gray-900 bg-opacity-60 p-6 rounded-lg border border-gray-700">
                  <h3 className="text-xl font-semibold mb-3 text-cyan-300">System Control</h3>
                  <p>Perform system operations like shutdown, restart, lock screen, and control system settings.</p>
                </div>
                
                <div className="bg-gray-900 bg-opacity-60 p-6 rounded-lg border border-gray-700">
                  <h3 className="text-xl font-semibold mb-3 text-cyan-300">Web Integration</h3>
                  <p>Open websites, search Google, and fetch weather information and news headlines.</p>
                </div>
                
                <div className="bg-gray-900 bg-opacity-60 p-6 rounded-lg border border-gray-700">
                  <h3 className="text-xl font-semibold mb-3 text-cyan-300">Application Control</h3>
                  <p>Launch applications like Chrome, PowerPoint, and Blender with voice commands.</p>
                </div>
                
                <div className="bg-gray-900 bg-opacity-60 p-6 rounded-lg border border-gray-700">
                  <h3 className="text-xl font-semibold mb-3 text-cyan-300">System Information</h3>
                  <p>Retrieve detailed information about CPU, memory, network, and other system components.</p>
                </div>
              </div>
            </div>
          </section>
          
          {/* Code Structure Section */}
          <section id="code-structure" className="mb-20">
            <div className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-sm p-8 rounded-xl border border-gray-700 shadow-xl">
              <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Code Structure</h2>
              
              <h3 className="text-xl font-semibold mb-4 text-cyan-300">Imports and Dependencies</h3>
              <p className="mb-4">The script begins with a comprehensive try-except block to import all necessary libraries. If imports fail, it attempts to install the required packages:</p>
              <div className="bg-gray-900 p-4 rounded-md mb-6 overflow-x-auto">
                <pre className="text-gray-300">
                  <code>
{`try:
    import os 
    import subprocess
    import wolframalpha
    import pyttsx3
    # ... more imports
except:
    import os
    try:
        os.system('pip install -r requirements.txt')
    except:
        pass
    # ... retry imports`}
                  </code>
                </pre>
              </div>
              
              <h3 className="text-xl font-semibold mb-4 text-cyan-300">Voice Engine Setup</h3>
              <p className="mb-4">The script initializes the text-to-speech engine:</p>
              <div className="bg-gray-900 p-4 rounded-md mb-6 overflow-x-auto">
                <pre className="text-gray-300">
                  <code>
{`engine = pyttsx3.init('sapi5')
voices = engine.getProperty('voices')
engine.setProperty('voice', voices[0].id)

owner = "ADNAN"
my_current_location = "Hyderabad"`}
                  </code>
                </pre>
              </div>
              
              <h3 className="text-xl font-semibold mb-4 text-cyan-300">Core Functions</h3>
              <p className="mb-4">Several key functions power the assistant:</p>
              
              <h4 className="text-lg font-medium mb-2 text-purple-300">speak(audio)</h4>
              <p className="mb-4">Converts text to speech using the pyttsx3 engine.</p>
              
              <h4 className="text-lg font-medium mb-2 text-purple-300">play_audio_background(file_path, volume)</h4>
              <p className="mb-4">Plays audio files in the background using pygame.</p>
              
              <h4 className="text-lg font-medium mb-2 text-purple-300">wishMe()</h4>
              <p className="mb-4">Greets the user based on the time of day.</p>
              
              <h4 className="text-lg font-medium mb-2 text-purple-300">takeCommand()</h4>
              <p className="mb-4">Listens for voice input and converts it to text using speech recognition.</p>
              
              <h4 className="text-lg font-medium mb-2 text-purple-300">wolfram(query)</h4>
              <p className="mb-4">Sends queries to Wolfram Alpha API and returns the results.</p>
              
              <h3 className="text-xl font-semibold mb-4 mt-8 text-cyan-300">Main Execution Flow</h3>
              <p className="mb-4">The main execution flow includes:</p>
              <ol className="list-decimal pl-6 space-y-2 text-gray-300 mb-6">
                <li>Initialization and greeting</li>
                <li>Internet connection check</li>
                <li>Continuous listening for commands in a while loop</li>
                <li>Command processing and execution</li>
              </ol>
              
              <h3 className="text-xl font-semibold mb-4 text-cyan-300">Command Processing</h3>
              <p className="mb-4">The script uses a series of conditional statements to process different commands:</p>
              <div className="bg-gray-900 p-4 rounded-md mb-6 overflow-x-auto">
                <pre className="text-gray-300">
                  <code>
{`if 'wikipedia' in query:
    # Wikipedia search logic
elif 'open youtube' in query:
    # YouTube opening logic
elif 'the time' in query:
    # Time telling logic
# ... many more command handlers`}
                  </code>
                </pre>
              </div>
            </div>
          </section>
          
          {/* API Reference Section */}
          <section id="api-reference" className="mb-20">
            <div className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-sm p-8 rounded-xl border border-gray-700 shadow-xl">
              <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">API Reference</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-cyan-300">speak(audio)</h3>
                  <p className="mb-2">Converts text to speech using the pyttsx3 engine.</p>
                  <div className="bg-gray-900 p-4 rounded-md mb-4 overflow-x-auto">
                    <pre className="text-gray-300">
                      <code>
{`def speak(audio):
    engine.say(audio)
    engine.runAndWait()`}
                      </code>
                    </pre>
                  </div>
                  <p><strong>Parameters:</strong></p>
                  <ul className="list-disc pl-6 text-gray-300">
                    <li><code>audio</code> (str): The text to be spoken</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-cyan-300">play_audio_background(file_path, volume)</h3>
                  <p className="mb-2">Plays audio files in the background using pygame.</p>
                  <div className="bg-gray-900 p-4 rounded-md mb-4 overflow-x-auto">
                    <pre className="text-gray-300">
                      <code>
{`def play_audio_background(file_path: str, volume: float = 0.1):
    def _play():
        pygame.init()
        pygame.mixer.init(frequency=44100, size=-16, channels=2, buffer=4096)
        try:
            pygame.mixer.music.load(file_path)
            pygame.mixer.music.set_volume(volume)
            pygame.mixer.music.play()
        except pygame.error as e:
            print(f"Error loading or playing sound: {e}")

    threading.Thread(target=_play, daemon=True).start()`}
                      </code>
                    </pre>
                  </div>
                  <p><strong>Parameters:</strong></p>
                  <ul className="list-disc pl-6 text-gray-300">
                    <li><code>file_path</code> (str): Path to the audio file</li>
                    <li><code>volume</code> (float, optional): Volume level from 0.0 to 1.0. Default is 0.1</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-cyan-300">takeCommand()</h3>
                  <p className="mb-2">Listens for voice input and converts it to text using speech recognition.</p>
                  <div className="bg-gray-900 p-4 rounded-md mb-4 overflow-x-auto">
                    <pre className="text-gray-300">
                      <code>
{`def takeCommand():
    r = sr.Recognizer()
    with sr.Microphone() as source:
        print("Listening...")
        r.pause_threshold = 1
        audio = r.listen(source)
    try:
        print("Recognizing...")   
        query = r.recognize_google(audio, language ='en-in')
        print(f"User said: {query}\\n")
    except Exception as e:
        print(e)   
        print("Unable to Recognize your voice.") 
        return "None"
    return query`}
                      </code>
                    </pre>
                  </div>
                  <p><strong>Returns:</strong></p>
                  <ul className="list-disc pl-6 text-gray-300">
                    <li><code>str</code>: The recognized text from speech, or "None" if recognition fails</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-cyan-300">wolfram(query)</h3>
                  <p className="mb-2">Sends queries to Wolfram Alpha API and returns the results.</p>
                  <div className="bg-gray-900 p-4 rounded-md mb-4 overflow-x-auto">
                    <pre className="text-gray-300">
                      <code>
{`def wolfram(query):
    api_key = "4Y594Q-5TAGRTVW86"
    requester = wolframalpha.Client(api_key)
    requested = requester.query(query)
    try:
        answer = next(requested.results).text
        return answer
    except:
        speak("no data found")`}
                      </code>
                    </pre>
                  </div>
                  <p><strong>Parameters:</strong></p>
                  <ul className="list-disc pl-6 text-gray-300">
                    <li><code>query</code> (str): The query to send to Wolfram Alpha</li>
                  </ul>
                  <p><strong>Returns:</strong></p>
                  <ul className="list-disc pl-6 text-gray-300">
                    <li><code>str</code>: The answer from Wolfram Alpha, or None if no data is found</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          
          {/* Examples Section */}
          <section id="examples" className="mb-20">
            <div className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-sm p-8 rounded-xl border border-gray-700 shadow-xl">
              <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Examples</h2>
              
              <h3 className="text-xl font-semibold mb-4 text-cyan-300">Basic Commands</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="bg-gray-900 p-4 rounded-md">
                  <p className="font-medium text-purple-300 mb-2">"Hello"</p>
                  <p className="text-gray-300">Greets you and asks how it can help.</p>
                </div>
                
                <div className="bg-gray-900 p-4 rounded-md">
                  <p className="font-medium text-purple-300 mb-2">"What's your name?"</p>
                  <p className="text-gray-300">Responds with its name (JARVIS).</p>
                </div>
                
                <div className="bg-gray-900 p-4 rounded-md">
                  <p className="font-medium text-purple-300 mb-2">"What time is it?"</p>
                  <p className="text-gray-300">Tells you the current time.</p>
                </div>
                
                <div className="bg-gray-900 p-4 rounded-md">
                  <p className="font-medium text-purple-300 mb-2">"What's today's date?"</p>
                  <p className="text-gray-300">Tells you the current date.</p>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold mb-4 text-cyan-300">Web and Search</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="bg-gray-900 p-4 rounded-md">
                  <p className="font-medium text-purple-300 mb-2">"Open YouTube"</p>
                  <p className="text-gray-300">Opens YouTube in your default browser.</p>
                </div>
                
                <div className="bg-gray-900 p-4 rounded-md">
                  <p className="font-medium text-purple-300 mb-2">"Search for Python tutorials"</p>
                  <p className="text-gray-300">Searches Google for Python tutorials.</p>
                </div>
                
                <div className="bg-gray-900 p-4 rounded-md">
                  <p className="font-medium text-purple-300 mb-2">"Wikipedia artificial intelligence"</p>
                  <p className="text-gray-300">Searches Wikipedia for information about artificial intelligence.</p>
                </div>
                
                <div className="bg-gray-900 p-4 rounded-md">
                  <p className="font-medium text-purple-300 mb-2">"What's the weather?"</p>
                  <p className="text-gray-300">Provides current weather information.</p>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold mb-4 text-cyan-300">System Commands</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="bg-gray-900 p-4 rounded-md">
                  <p className="font-medium text-purple-300 mb-2">"System information"</p>
                  <p className="text-gray-300">Provides detailed information about your system.</p>
                </div>
                
                <div className="bg-gray-900 p-4 rounded-md">
                  <p className="font-medium text-purple-300 mb-2">"CPU information"</p>
                  <p className="text-gray-300">Provides information about your CPU.</p>
                </div>
                
                <div className="bg-gray-900 p-4 rounded-md">
                  <p className="font-medium text-purple-300 mb-2">"Launch Chrome"</p>
                  <p className="text-gray-300">Opens Google Chrome browser.</p>
                </div>
                
                <div className="bg-gray-900 p-4 rounded-md">
                  <p className="font-medium text-purple-300 mb-2">"Lock window"</p>
                  <p className="text-gray-300">Locks your computer.</p>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold mb-4 text-cyan-300">Knowledge and Calculations</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-900 p-4 rounded-md">
                <p className="font-medium text-purple-300 mb-2">"Calculate 25 plus 17"</p>
                  <p className="text-gray-300">Performs the calculation and returns the result (42).</p>
                </div>
                
                <div className="bg-gray-900 p-4 rounded-md">
                  <p className="font-medium text-purple-300 mb-2">"What is the capital of France?"</p>
                  <p className="text-gray-300">Uses Wolfram Alpha to answer knowledge questions.</p>
                </div>
                
                <div className="bg-gray-900 p-4 rounded-md">
                  <p className="font-medium text-purple-300 mb-2">"Tell me a joke"</p>
                  <p className="text-gray-300">Tells you a random joke.</p>
                </div>
                
                <div className="bg-gray-900 p-4 rounded-md">
                  <p className="font-medium text-purple-300 mb-2">"Temperature in New York"</p>
                  <p className="text-gray-300">Provides the current temperature in New York.</p>
                </div>
              </div>
            </div>
          </section>
          
          {/* Donate Section */}
          <section id="donate" className="mb-20">
            <div className="bg-gray-800/50 backdrop-blur-lg p-8 md:p-12 rounded-2xl border border-gray-700/50 shadow-2xl relative overflow-hidden">
                {/* Background gradient elements */}
                <div className="absolute top-0 left-0 w-48 h-48 bg-pink-500/10 rounded-full filter blur-3xl -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full filter blur-3xl translate-x-1/3 translate-y-1/3" />
                
                <div className="relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-500 flex items-center justify-center">
                    <BiDonateHeart className="mr-3 text-pink-400 animate-pulse" /> 
                    Support JARVIS
                    </h2>
                    
                    <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-gray-300">
                    JARVIS is a free and open-source project dedicated to advancing AI assistance. Your donations help us improve features, maintain servers, and continue development.
                    </p>
                </div>
                
                <div className="flex flex-col md:flex-row items-stretch justify-center gap-8 mb-12">
                    {/* One-time Donation Card */}
                    <motion.div 
                    className="bg-gray-900/80 p-8 rounded-2xl border border-pink-500/20 hover:border-pink-500/40 transition-all duration-300 text-center w-full md:w-1/2 lg:w-2/5 relative overflow-hidden group backdrop-blur-sm"
                    whileHover={{ y: -5 }}
                    >
                    <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative z-10">
                        <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                        <BiDonateHeart className="text-3xl text-white" />
                        </div>
                        <h3 className="text-2xl font-bold mb-4 text-white">One-time Donation</h3>
                        <p className="mb-6 text-gray-300">
                        Support the project with a one-time contribution. Every donation helps us maintain and improve JARVIS.
                        </p>
                        <motion.button 
                        onClick={() => setShowDonationModal(true)}
                        className="w-full py-4 px-8 rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300 shadow-lg flex items-center justify-center space-x-2"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        >
                        <BiDonateHeart className="text-xl" />
                        <span>Donate Now</span>
                        </motion.button>
                    </div>
                    </motion.div>
                    
                    {/* Contribute Code Card */}
                    <motion.div 
                    className="bg-gray-900/80 p-8 rounded-2xl border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 text-center w-full md:w-1/2 lg:w-2/5 relative overflow-hidden group backdrop-blur-sm"
                    whileHover={{ y: -5 }}
                    >
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative z-10">
                        <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-cyan-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                        <MdCode className="text-3xl text-white" />
                        </div>
                        <h3 className="text-2xl font-bold mb-4 text-white">Contribute Code</h3>
                        <p className="mb-6 text-gray-300">
                        Help improve JARVIS by contributing to the codebase. Join our community of developers.
                        </p>
                        <motion.a 
                        href="https://github.com/Adnan-The-Coder/jarvis-build-v1/issues" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-full py-4 px-8 rounded-lg bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-semibold hover:from-cyan-600 hover:to-indigo-700 transition-all duration-300 shadow-lg flex items-center justify-center space-x-2"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        >
                        <MdCode className="text-xl" />
                        <span>Start Contributing</span>
                        </motion.a>
                    </div>
                    </motion.div>
                </div>
                
                {/* Top Supporters Section */}
                <div className="bg-gray-900/60 p-8 rounded-2xl border border-purple-500/20 backdrop-blur-sm">
                    <h3 className="text-2xl font-bold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                    Our Amazing Supporters
                    </h3>
                    <p className="text-center mb-8 text-gray-300">
                    Special thanks to our generous contributors who help make JARVIS possible!
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                    {[
                        { initial: "JD", name: "Junaid" },
                        { initial: "MK", name: "Mirza khalid" },
                        { initial: "RB", name: "Ryan Brooks" }
                    ].map((supporter, index) => (
                        <motion.div 
                        key={index}
                        className="group relative"
                        whileHover={{ scale: 1.1 }}
                        >
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300" />
                        <div className="bg-gray-800/80 p-4 rounded-full w-16 h-16 flex items-center justify-center border border-gray-700 relative">
                            <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                            {supporter.initial}
                            </span>
                        </div>
                        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-800/90 text-white px-3 py-1 rounded text-sm mt-2 whitespace-nowrap">
                            {supporter.name}
                        </span>
                        </motion.div>
                    ))}
                    <br />
                    </div>
                </div>
                </div>
            </div>
        </section>
          
          {/* Contact Section */}
          <section id="contact" className="mb-20">
            <div className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-sm p-8 rounded-xl border border-gray-700 shadow-xl">
              <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Get in Touch</h2>
              
              <div className="flex flex-col md:flex-row gap-8">
                <div className="w-full md:w-1/2">
                  <p className="text-lg mb-6">
                    Have questions, suggestions, or want to contribute to the project? Reach out through any of these channels:
                  </p>
                  
                  <div className="space-y-4">
                    <a href="https://github.com/Adnan-The-Coder/jarvis-build-v1" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors duration-300">
                      <FaGithub className="text-2xl" />
                      <span>GitHub Repository</span>
                    </a>
                    
                    <a href="https://www.linkedin.com/in/syedadnanali99" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors duration-300">
                      <FaLinkedin className="text-2xl" />
                      <span>Connect on LinkedIn</span>
                    </a>
                    
                    <div className="flex items-center space-x-3 text-gray-300">
                      <MdOutlineQuestionAnswer className="text-2xl" />
                      <span>Email: syedadnanali0106@gmail.com</span>
                    </div>
                  </div>
                </div>
                
                <div className="w-full md:w-1/2">
                  <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
                    <h3 className="text-xl font-semibold mb-4 text-cyan-300">Join the Community</h3>
                    <p className="mb-4">
                      The JARVIS project is always looking for contributors and testers. Whether you're a Python expert or just getting started, there are many ways to get involved:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-300">
                      <li>Submit bug reports and feature requests on GitHub</li>
                      <li>Contribute code improvements and new features</li>
                      <li>Help improve documentation and examples</li>
                      <li>Share your experience and help others in discussions</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        
        {/* Footer */}
        <footer className="bg-gray-900 text-gray-400 p-8 border-t border-gray-800">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
                {/* Left section - Logo and Version */}
                <div className="text-center lg:text-left flex flex-col items-center lg:items-start w-full lg:w-1/3">
                    <h2 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 mb-4">
                    JARVIS Assistant
                    </h2>
                    
                    {/* Version Badge */}
                    <motion.div 
                    className="inline-flex items-center justify-center mb-3"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                    <motion.div 
                        className="relative inline-flex items-center px-6 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 border border-cyan-500/30 backdrop-blur-sm"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        {/* Animated circles in background */}
                        <motion.div 
                        className="absolute inset-0 rounded-full bg-cyan-500/10 blur-md"
                        animate={{ 
                            scale: [1, 1.2, 1],
                            opacity: [0.5, 0.3, 0.5]
                        }}
                        transition={{ 
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        />
                        <motion.div 
                        className="absolute inset-0 rounded-full bg-purple-500/10 blur-md"
                        animate={{ 
                            scale: [1.2, 1, 1.2],
                            opacity: [0.3, 0.5, 0.3]
                        }}
                        transition={{ 
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 0.5
                        }}
                        />
                        
                        {/* Version text with animated gradient */}
                        <motion.span 
                        className="text-sm font-bold text-cyan-400 mr-3"
                        animate={{ 
                            textShadow: [
                            "0 0 10px #22d3ee, 0 0 20px #22d3ee",
                            "0 0 20px #a855f7, 0 0 30px #a855f7",
                            "0 0 10px #ec4899, 0 0 20px #ec4899",
                            "0 0 10px #22d3ee, 0 0 20px #22d3ee"
                            ]
                        }}
                        transition={{ 
                            duration: 3,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                        >
                        VERSION
                        </motion.span>
                        
                        {/* Animated number */}
                        <motion.span 
                        className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500"
                        animate={{ 
                            scale: [1, 1.1, 1]
                        }}
                        transition={{ 
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        >
                        1.0
                        </motion.span>
                        
                        {/* Animated pulse ring */}
                        <motion.div 
                        className="absolute inset-0 rounded-full border border-cyan-400/50"
                        animate={{ 
                            scale: [1, 1.3, 1],
                            opacity: [0.5, 0, 0.5]
                        }}
                        transition={{ 
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        />
                    </motion.div>
                    </motion.div>
                    
                    <p className="text-sm md:text-base font-light text-center lg:text-left">
                    A powerful Python-based virtual assistant
                    </p>
                </div>
                
                {/* Center section - Created by (only visible on larger screens) */}
                <div className="hidden lg:flex flex-col items-center w-1/3">
                    <p className="text-sm md:text-base font-medium">
                    Created by{' '}
                    <a 
                        href="https://portfolio-v2-c0n.pages.dev/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-cyan-400 hover:text-cyan-300 transition-all duration-300 font-semibold hover:underline hover:underline-offset-4"
                    >
                        Syed Adnan Ali
                    </a>
                    </p>
                </div>
                
                {/* Right section - Social icons */}
                <div className="flex items-center justify-center lg:justify-end space-x-6 w-full lg:w-1/3">
                    <a 
                    href="https://github.com/yourusername/jarvis" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110"
                    >
                    <FaGithub className="text-2xl md:text-3xl" />
                    </a>
                    <a 
                    href="https://www.linkedin.com/in/syedadnanali99" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110"
                    >
                    <FaLinkedin className="text-2xl md:text-3xl" />
                    </a>
                    <a 
                    href="https://www.instagram.com/adnan_the_coder/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110"
                    >
                    <FaInstagram className="text-2xl md:text-3xl" />
                    </a>
                </div>
                </div>
                
                {/* Mobile only - Created by (visible only on smaller screens) */}
                <div className="mt-8 pt-6 border-t border-gray-800 flex flex-col items-center lg:hidden">
                <p className="text-sm md:text-base font-medium text-center">
                    Created by{' '}
                    <a 
                    href="https://www.linkedin.com/in/syedadnanali99" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-cyan-400 hover:text-cyan-300 transition-all duration-300 font-semibold hover:underline hover:underline-offset-4"
                    >
                    Syed Adnan Ali
                    </a>
                </p>
                </div>
            </div>
        </footer>
      </div>
      <Footer/>
      <DonationModal 
        isOpen={showDonationModal} 
        onClose={() => setShowDonationModal(false)} 
      />
    </>
  );
};

export default Page;