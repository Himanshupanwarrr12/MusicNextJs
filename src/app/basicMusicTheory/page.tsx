"use client"
import React, { useState } from 'react';
import { Play, BookOpen, Music, Volume2, ChevronDown, ChevronUp, Star } from 'lucide-react';

const BasicMusicTheoryPage = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [playingNote, setPlayingNote] = useState(null);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  const playNote = (note) => {
    setPlayingNote(note);
    // Simulate note playing
    setTimeout(() => setPlayingNote(null), 1000);
  };

  const musicSections = [
    {
      id: 'notes',
      title: 'Notes and the Musical Alphabet',
      icon: <Music className="w-6 h-6" />,
      content: (
        <div className="space-y-4">
          <p className="text-gray-300">Music uses only 7 letter names: A, B, C, D, E, F, G. These repeat infinitely in both directions.</p>
          <div className="grid grid-cols-7 gap-2">
            {['A', 'B', 'C', 'D', 'E', 'F', 'G'].map((note) => (
              <button
                key={note}
                onClick={() => playNote(note)}
                className={`p-4 rounded-lg border-2 transition-all duration-300 ${
                  playingNote === note 
                    ? 'bg-blue-500 border-blue-400 text-white scale-105' 
                    : 'bg-gray-800 border-gray-600 text-white hover:bg-gray-700'
                }`}
              >
                <div className="text-xl font-bold">{note}</div>
              </button>
            ))}
          </div>
          <div className="bg-gray-800 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-400 mb-2">Sharps and Flats</h4>
            <p className="text-gray-300">Between most notes are sharps (#) and flats (♭). For example: A# or B♭ is the same pitch.</p>
          </div>
        </div>
      )
    },
    {
      id: 'staff',
      title: 'Staff, Clefs & Note Reading',
      icon: <BookOpen className="w-6 h-6" />,
      content: (
        <div className="space-y-4">
          <div className="bg-gray-800 p-6 rounded-lg">
            <h4 className="font-semibold text-blue-400 mb-3">The Staff</h4>
            <div className="space-y-2 mb-4">
              {[1, 2, 3, 4, 5].map((line) => (
                <div key={line} className="h-0.5 bg-gray-600 relative">
                  <span className="absolute -left-8 -top-2 text-xs text-gray-400">{6 - line}</span>
                </div>
              ))}
            </div>
            <p className="text-gray-300">Five horizontal lines where notes are placed. Notes can sit on lines or in spaces between them.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gray-800 p-4 rounded-lg">
              <h4 className="font-semibold text-green-400 mb-2">Treble Clef 𝄞</h4>
              <p className="text-gray-300 text-sm">Used for higher-pitched instruments like violin, flute, and right hand piano.</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <h4 className="font-semibold text-purple-400 mb-2">Bass Clef 𝄢</h4>
              <p className="text-gray-300 text-sm">Used for lower-pitched instruments like bass, tuba, and left hand piano.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'time',
      title: 'Time Signatures & Rhythm',
      icon: <Volume2 className="w-6 h-6" />,
      content: (
        <div className="space-y-4">
          <div className="bg-gray-800 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-400 mb-3">Common Time Signatures</h4>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center p-3 bg-gray-700 rounded">
                <div className="text-2xl font-bold text-white mb-1">4/4</div>
                <div className="text-sm text-gray-300">4 quarter note beats per measure</div>
              </div>
              <div className="text-center p-3 bg-gray-700 rounded">
                <div className="text-2xl font-bold text-white mb-1">3/4</div>
                <div className="text-sm text-gray-300">3 quarter note beats per measure</div>
              </div>
              <div className="text-center p-3 bg-gray-700 rounded">
                <div className="text-2xl font-bold text-white mb-1">2/4</div>
                <div className="text-sm text-gray-300">2 quarter note beats per measure</div>
              </div>
            </div>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-400 mb-3">Note Values</h4>
            <div className="space-y-2">
              <div className="flex items-center justify-between p-2 bg-gray-700 rounded">
                <span className="text-white">Whole Note ○</span>
                <span className="text-gray-300">4 beats</span>
              </div>
              <div className="flex items-center justify-between p-2 bg-gray-700 rounded">
                <span className="text-white">Half Note ♩</span>
                <span className="text-gray-300">2 beats</span>
              </div>
              <div className="flex items-center justify-between p-2 bg-gray-700 rounded">
                <span className="text-white">Quarter Note ♪</span>
                <span className="text-gray-300">1 beat</span>
              </div>
              <div className="flex items-center justify-between p-2 bg-gray-700 rounded">
                <span className="text-white">Eighth Note ♫</span>
                <span className="text-gray-300">1/2 beat</span>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'scales',
      title: 'Scales & Key Signatures',
      icon: <Star className="w-6 h-6" />,
      content: (
        <div className="space-y-4">
          <div className="bg-gray-800 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-400 mb-3">The Major Scale</h4>
            <p className="text-gray-300 mb-3">The foundation of Western music. Pattern: Whole-Whole-Half-Whole-Whole-Whole-Half</p>
            <div className="bg-gray-700 p-3 rounded">
              <div className="text-center">
                <div className="text-lg font-bold text-white mb-2">C Major Scale (no sharps or flats)</div>
                <div className="flex justify-center space-x-2">
                  {['C', 'D', 'E', 'F', 'G', 'A', 'B', 'C'].map((note, index) => (
                    <div key={index} className="text-white bg-blue-600 px-2 py-1 rounded text-sm">
                      {note}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg">
            <h4 className="font-semibold text-purple-400 mb-3">The Natural Minor Scale</h4>
            <p className="text-gray-300 mb-3">Creates a more melancholic sound. Pattern: W-H-W-W-H-W-W</p>
            <div className="bg-gray-700 p-3 rounded">
              <div className="text-center">
                <div className="text-lg font-bold text-white mb-2">A Natural Minor Scale</div>
                <div className="flex justify-center space-x-2">
                  {['A', 'B', 'C', 'D', 'E', 'F', 'G', 'A'].map((note, index) => (
                    <div key={index} className="text-white bg-purple-600 px-2 py-1 rounded text-sm">
                      {note}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'intervals',
      title: 'Intervals',
      icon: <Music className="w-6 h-6" />,
      content: (
        <div className="space-y-4">
          <p className="text-gray-300">Intervals measure the distance between two notes.They are the building blocks of chords and melodies.</p>
          <div className="grid md:grid-cols-2 gap-3">
            {[
              { name: 'Unison', distance: '0 semitones', example: 'C to C' },
              { name: 'Minor 2nd', distance: '1 semitone', example: 'C to D♭' },
              { name: 'Major 2nd', distance: '2 semitones', example: 'C to D' },
              { name: 'Minor 3rd', distance: '3 semitones', example: 'C to E♭' },
              { name: 'Major 3rd', distance: '4 semitones', example: 'C to E' },
              { name: 'Perfect 4th', distance: '5 semitones', example: 'C to F' },
              { name: 'Tritone', distance: '6 semitones', example: 'C to F#' },
              { name: 'Perfect 5th', distance: '7 semitones', example: 'C to G' }
            ].map((interval, index) => (
              <div key={index} className="bg-gray-800 p-3 rounded-lg">
                <div className="font-semibold text-blue-400">{interval.name}</div>
                <div className="text-sm text-gray-300">{interval.distance}</div>
                <div className="text-xs text-gray-400">Example: {interval.example}</div>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 'chords',
      title: 'Basic Chord Construction',
      icon: <Volume2 className="w-6 h-6" />,
      content: (
        <div className="space-y-4">
          <div className="bg-gray-800 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-400 mb-3">Triads - The Basic Chords</h4>
            <p className="text-gray-300 mb-4">Triads are three-note chords built from stacking thirds.</p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-700 p-4 rounded">
                <h5 className="font-semibold text-green-400 mb-2">Major Chord</h5>
                <p className="text-sm text-gray-300 mb-2">Root + Major 3rd + Perfect 5th</p>
                <div className="text-white">C Major: C - E - G</div>
                <div className="text-xs text-gray-400 mt-1">Happy, bright sound</div>
              </div>
              <div className="bg-gray-700 p-4 rounded">
                <h5 className="font-semibold text-red-400 mb-2">Minor Chord</h5>
                <p className="text-sm text-gray-300 mb-2">Root + Minor 3rd + Perfect 5th</p>
                <div className="text-white">C Minor: C - E♭ - G</div>
                <div className="text-xs text-gray-400 mt-1">Sad, dark sound</div>
              </div>
            </div>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg">
            <h4 className="font-semibold text-purple-400 mb-3">Common Chord Progressions</h4>
            <div className="space-y-2">
              <div className="p-2 bg-gray-700 rounded">
                <span className="text-white font-semibold">I - V - vi - IV</span>
                <span className="text-gray-300 ml-2">(C - G - Am - F in C major)</span>
              </div>
              <div className="p-2 bg-gray-700 rounded">
                <span className="text-white font-semibold">ii - V - I</span>
                <span className="text-gray-300 ml-2">(Dm - G - C in C major)</span>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Header Section */}
      <div className="relative pt-20 pb-12 px-4">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-blue-600/20 rounded-full mb-6">
            <BookOpen className="w-5 h-5 text-blue-400 mr-2" />
            <span className="text-blue-300 text-sm font-medium">Foundation Course</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Basic Music Theory
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Master the fundamentals of music theory. Learn to read music, understand scales, chords, and rhythm patterns that form the foundation of all music.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center text-gray-300">
              <Play className="w-5 h-5 mr-2 text-green-400" />
              <span>6 Interactive Lessons</span>
            </div>
            <div className="flex items-center text-gray-300">
              <Volume2 className="w-5 h-5 mr-2 text-blue-400" />
              <span>Audio Examples</span>
            </div>
            <div className="flex items-center text-gray-300">
              <Star className="w-5 h-5 mr-2 text-yellow-400" />
              <span>Beginner Friendly</span>
            </div>
          </div>
        </div>
      </div>

      {/* Course Content */}
      <div className="max-w-4xl mx-auto px-4 pb-12">
        <div className="space-y-4">
          {musicSections.map((section, index) => (
            <div key={section.id} className="bg-gray-800/50 backdrop-blur rounded-xl border border-gray-700/50 overflow-hidden">
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full px-6 py-5 text-left hover:bg-gray-700/50 transition-all duration-300 flex items-center justify-between group"
              >
                <div className="flex items-center">
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 mr-4 group-hover:scale-110 transition-transform">
                    {section.icon}
                  </div>
                  <div>
                    <div className="flex items-center">
                      <span className="text-sm text-gray-400 mr-3">Lesson {index + 1}</span>
                      <h3 className="text-xl font-semibold text-white group-hover:text-blue-300 transition-colors">
                        {section.title}
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="text-gray-400 group-hover:text-white transition-colors">
                  {activeSection === section.id ? <ChevronUp /> : <ChevronDown />}
                </div>
              </button>
              
              {activeSection === section.id && (
                <div className="px-6 pb-6 border-t border-gray-700/50">
                  <div className="pt-4">
                    {section.content}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Start Your Musical Journey?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Join thousands of students who have built a solid foundation in music theory. Start with the basics and progress to advanced concepts at your own pace.
            </p>
            <button className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center">
              <Play className="w-5 h-5 mr-2" />
              Start Learning Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicMusicTheoryPage;