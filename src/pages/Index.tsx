import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Shield, Users, Globe, Scale, AlertTriangle, CheckCircle2, User, Calendar, GraduationCap, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const slides = [
    {
      id: 'title',
      title: 'Data Protection Act 2019',
      subtitle: 'Kenya\'s Landmark Privacy Regulation',
      content: (
        <div className="text-center space-y-6 sm:space-y-8">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            <Shield className="w-16 h-16 sm:w-20 md:w-24 mx-auto mb-4 sm:mb-6 text-blue-600" />
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4">Data Protection Act 2019</h1>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground">Kenya's Landmark Privacy Regulation</p>
          </div>
          <div className="space-y-2">
            <p className="text-base sm:text-lg">DAT 2102: Information Security, Governance & The Cloud</p>
            <p className="text-sm sm:text-base text-muted-foreground">Group 2A • June 2025</p>
          </div>
        </div>
      )
    },
    {
      id: 'group-members',
      title: 'Group Members',
      subtitle: 'Group 2A Team',
      content: (
        <div className="space-y-6">
          <div className="text-center mb-6">
            <Users className="w-12 h-12 sm:w-16 md:w-20 mx-auto text-blue-600 mb-4" />
            <p className="text-lg sm:text-xl text-gray-600">Bachelor of Science in Statistics and Data Science</p>
          </div>
          <div className="grid gap-3 sm:gap-4 max-w-4xl mx-auto">
            {[
              { id: '191948', name: 'Justus Onyango' },
              { id: '190093', name: 'Paul Ngugi' },
              { id: '180657', name: 'Caxton Kiptoo' },
              { id: '180963', name: 'Alfred Maweu' },
              { id: '178916', name: 'Elvis Macharia' }
            ].map((member, index) => (
              <div key={member.id} className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 sm:p-6 rounded-xl border border-blue-100 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="bg-blue-100 p-2 sm:p-3 rounded-full">
                    <User className="w-5 h-5 sm:w-6 md:w-8 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                      <h4 className="text-base sm:text-lg font-semibold text-gray-800">{member.name}</h4>
                      <span className="text-sm sm:text-base text-blue-600 font-medium">{member.id}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-3 sm:px-4 py-2 rounded-full text-sm sm:text-base">
              <GraduationCap className="w-4 h-4 sm:w-5 md:w-5" />
              <span className="font-medium">Statistics & Data Science Team</span>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'introduction',
      title: 'Privacy vs Data Protection',
      subtitle: 'Understanding the Foundation',
      content: (
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-4 sm:p-6 rounded-xl">
              <h3 className="text-xl sm:text-2xl font-bold text-blue-800 mb-4">Privacy</h3>
              <p className="text-gray-700 text-sm sm:text-base">"The right to be left alone" - Warren & Brandeis (1890)</p>
              <ul className="mt-4 space-y-2 text-sm">
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>Constitutional privacy (personal autonomy)</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>Informational privacy (control over data)</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-purple-50 to-pink-100 p-4 sm:p-6 rounded-xl">
              <h3 className="text-xl sm:text-2xl font-bold text-purple-800 mb-4">Data Protection</h3>
              <p className="text-gray-700 text-sm sm:text-base">Laws regulating storage and sharing of personal information</p>
              <div className="mt-4 p-3 bg-white rounded-lg">
                <p className="text-sm font-medium">Constitutional Basis:</p>
                <p className="text-xs text-gray-600">Article 31(c) & (d) - Kenya Constitution</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'key-actors',
      title: 'Key Actors & Definitions',
      subtitle: 'Who\'s Who in Data Protection',
      content: (
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
          <div className="space-y-4">
            <div className="bg-gradient-to-r from-green-400 to-green-600 text-white p-4 rounded-xl">
              <div className="flex items-center space-x-3">
                <Shield className="w-6 h-6 sm:w-8 md:w-8 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-sm sm:text-base">Data Commissioner</h4>
                  <p className="text-xs sm:text-sm opacity-90">Heads the regulatory office</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-blue-400 to-blue-600 text-white p-4 rounded-xl">
              <div className="flex items-center space-x-3">
                <Users className="w-6 h-6 sm:w-8 md:w-8 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-sm sm:text-base">Data Subject</h4>
                  <p className="text-xs sm:text-sm opacity-90">Identifiable person whose data is processed</p>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="bg-gradient-to-r from-orange-400 to-orange-600 text-white p-4 rounded-xl">
              <div className="flex items-center space-x-3">
                <Scale className="w-6 h-6 sm:w-8 md:w-8 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-sm sm:text-base">Data Controller</h4>
                  <p className="text-xs sm:text-sm opacity-90">Determines purpose and means of processing</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-purple-400 to-purple-600 text-white p-4 rounded-xl">
              <div className="flex items-center space-x-3">
                <Globe className="w-6 h-6 sm:w-8 md:w-8 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-sm sm:text-base">Data Processor</h4>
                  <p className="text-xs sm:text-sm opacity-90">Processes data on behalf of controller</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'objectives',
      title: 'Act Objectives',
      subtitle: 'Core Goals of the Legislation',
      content: (
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start space-x-3 p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg">
                <CheckCircle2 className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-blue-800">Regulate Processing</h4>
                  <p className="text-sm text-gray-600">Establish clear rules for personal data handling</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-lg">
                <CheckCircle2 className="w-6 h-6 text-green-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-green-800">Protect Privacy</h4>
                  <p className="text-sm text-gray-600">Safeguard individual privacy rights</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 p-4 bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg">
                <CheckCircle2 className="w-6 h-6 text-purple-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-purple-800">Legal Framework</h4>
                  <p className="text-sm text-gray-600">Create institutional mechanisms for protection</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 p-4 bg-gradient-to-r from-orange-50 to-orange-100 rounded-lg">
                <CheckCircle2 className="w-6 h-6 text-orange-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-orange-800">Individual Rights</h4>
                  <p className="text-sm text-gray-600">Provide rights and remedies for data subjects</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'data-commissioner',
      title: 'Office of the Data Commissioner',
      subtitle: 'Powers and Functions',
      content: (
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-blue-800 mb-4">Key Functions</h3>
              <div className="space-y-3">
                <div className="p-3 bg-blue-50 rounded-lg">
                  <p className="text-sm">Implement and enforce the DPA</p>
                </div>
                <div className="p-3 bg-green-50 rounded-lg">
                  <p className="text-sm">Maintain register of controllers/processors</p>
                </div>
                <div className="p-3 bg-purple-50 rounded-lg">
                  <p className="text-sm">Conduct Data Protection Impact Assessments</p>
                </div>
                <div className="p-3 bg-orange-50 rounded-lg">
                  <p className="text-sm">Investigate complaints and violations</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-red-800 mb-4">Enforcement Powers</h3>
              <div className="space-y-3">
                <div className="p-3 bg-red-50 rounded-lg border-l-4 border-red-400">
                  <p className="text-sm font-medium">Investigate on own initiative</p>
                </div>
                <div className="p-3 bg-yellow-50 rounded-lg border-l-4 border-yellow-400">
                  <p className="text-sm font-medium">Issue summons and penalties</p>
                </div>
                <div className="p-3 bg-pink-50 rounded-lg border-l-4 border-pink-400">
                  <p className="text-sm font-medium">Conduct inspections and searches</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'registration',
      title: 'Registration Requirements',
      subtitle: 'Mandatory for All Data Controllers & Processors',
      content: (
        <div className="space-y-6 sm:space-y-8">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-red-100 text-red-800 px-3 sm:px-4 py-2 rounded-full">
              <AlertTriangle className="w-4 h-4 sm:w-5 md:w-5" />
              <span className="font-semibold text-sm sm:text-base">Registration is Mandatory</span>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 sm:p-6 rounded-xl">
              <h4 className="font-bold text-blue-800 mb-3 text-sm sm:text-base">Application Process</h4>
              <ul className="text-xs sm:text-sm space-y-2">
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-3 h-3 sm:w-4 md:w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>Apply to Data Commissioner</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-3 h-3 sm:w-4 md:w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>Meet registration thresholds</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-3 h-3 sm:w-4 md:w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>Receive certificate upon approval</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 sm:p-6 rounded-xl">
              <h4 className="font-bold text-green-800 mb-3 text-sm sm:text-base">Public Register</h4>
              <ul className="text-xs sm:text-sm space-y-2">
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-3 h-3 sm:w-4 md:w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Available for public inspection</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-3 h-3 sm:w-4 md:w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Certified copies available</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-3 h-3 sm:w-4 md:w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Regular updates required</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 sm:p-6 rounded-xl">
              <h4 className="font-bold text-purple-800 mb-3 text-sm sm:text-base">Compliance</h4>
              <ul className="text-xs sm:text-sm space-y-2">
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-3 h-3 sm:w-4 md:w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span>Certificate renewal required</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-3 h-3 sm:w-4 md:w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span>Terms can be varied</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-3 h-3 sm:w-4 md:w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span>Cancellation for non-compliance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'data-subject-rights',
      title: 'Data Subject Rights',
      subtitle: 'Individual Rights Under the Act',
      content: (
        <div className="space-y-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-3 sm:p-4 rounded-xl">
              <h4 className="font-bold mb-2 text-sm sm:text-base">Right to be Informed</h4>
              <p className="text-xs sm:text-sm opacity-90">Know how your data is being used</p>
            </div>
            <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-3 sm:p-4 rounded-xl">
              <h4 className="font-bold mb-2 text-sm sm:text-base">Right of Access</h4>
              <p className="text-xs sm:text-sm opacity-90">Access your personal data</p>
            </div>
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-3 sm:p-4 rounded-xl">
              <h4 className="font-bold mb-2 text-sm sm:text-base">Right to Object</h4>
              <p className="text-xs sm:text-sm opacity-90">Object to data processing</p>
            </div>
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white p-3 sm:p-4 rounded-xl">
              <h4 className="font-bold mb-2 text-sm sm:text-base">Right to Correction</h4>
              <p className="text-xs sm:text-sm opacity-90">Correct false or misleading data</p>
            </div>
            <div className="bg-gradient-to-br from-red-500 to-red-600 text-white p-3 sm:p-4 rounded-xl">
              <h4 className="font-bold mb-2 text-sm sm:text-base">Right to Deletion</h4>
              <p className="text-xs sm:text-sm opacity-90">Delete false or misleading data</p>
            </div>
            <div className="bg-gradient-to-br from-pink-500 to-pink-600 text-white p-3 sm:p-4 rounded-xl">
              <h4 className="font-bold mb-2 text-sm sm:text-base">Data Portability</h4>
              <p className="text-xs sm:text-sm opacity-90">Transfer data between controllers</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'sensitive-data',
      title: 'Sensitive Personal Data',
      subtitle: 'Enhanced Protection Requirements',
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-red-100 to-red-200 p-4 sm:p-6 rounded-xl border-l-4 border-red-500">
            <h3 className="text-lg sm:text-xl font-bold text-red-800 mb-4">What is Sensitive Data?</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="bg-white p-3 rounded-lg">
                  <p className="text-xs sm:text-sm">Race and ethnic origin</p>
                </div>
                <div className="bg-white p-3 rounded-lg">
                  <p className="text-xs sm:text-sm">Health status</p>
                </div>
                <div className="bg-white p-3 rounded-lg">
                  <p className="text-xs sm:text-sm">Genetic and biometric data</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="bg-white p-3 rounded-lg">
                  <p className="text-xs sm:text-sm">Religious beliefs</p>
                </div>
                <div className="bg-white p-3 rounded-lg">
                  <p className="text-xs sm:text-sm">Sexual orientation</p>
                </div>
                <div className="bg-white p-3 rounded-lg">
                  <p className="text-xs sm:text-sm">Family details</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
            <div className="flex items-start space-x-2">
              <AlertTriangle className="w-4 h-4 sm:w-5 md:w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
              <p className="text-xs sm:text-sm font-medium text-yellow-800">
                Requires explicit consent and enhanced safeguards for processing
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'data-principles',
      title: 'Eight Key Principles',
      subtitle: 'Foundation of Data Protection',
      content: (
        <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
          <div className="space-y-3">
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-3 sm:p-4 rounded-lg border-l-4 border-blue-500">
              <h4 className="font-semibold text-blue-800 text-sm sm:text-base">1. Right to Privacy</h4>
              <p className="text-xs sm:text-sm text-gray-600">Processing respects individual privacy</p>
            </div>
            <div className="bg-gradient-to-r from-green-50 to-green-100 p-3 sm:p-4 rounded-lg border-l-4 border-green-500">
              <h4 className="font-semibold text-green-800 text-sm sm:text-base">2. Lawfulness & Transparency</h4>
              <p className="text-xs sm:text-sm text-gray-600">Processing must be lawful and transparent</p>
            </div>
            <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-3 sm:p-4 rounded-lg border-l-4 border-purple-500">
              <h4 className="font-semibold text-purple-800 text-sm sm:text-base">3. Data Minimisation</h4>
              <p className="text-xs sm:text-sm text-gray-600">Collect only what's necessary</p>
            </div>
            <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-3 sm:p-4 rounded-lg border-l-4 border-orange-500">
              <h4 className="font-semibold text-orange-800 text-sm sm:text-base">4. Purpose Limitation</h4>
              <p className="text-xs sm:text-sm text-gray-600">Use for specified, legitimate purposes</p>
            </div>
          </div>
          <div className="space-y-3">
            <div className="bg-gradient-to-r from-red-50 to-red-100 p-3 sm:p-4 rounded-lg border-l-4 border-red-500">
              <h4 className="font-semibold text-red-800 text-sm sm:text-base">5. Accuracy</h4>
              <p className="text-xs sm:text-sm text-gray-600">Keep data accurate and up-to-date</p>
            </div>
            <div className="bg-gradient-to-r from-pink-50 to-pink-100 p-3 sm:p-4 rounded-lg border-l-4 border-pink-500">
              <h4 className="font-semibold text-pink-800 text-sm sm:text-base">6. Storage Limitation</h4>
              <p className="text-xs sm:text-sm text-gray-600">Don't keep data longer than necessary</p>
            </div>
            <div className="bg-gradient-to-r from-indigo-50 to-indigo-100 p-3 sm:p-4 rounded-lg border-l-4 border-indigo-500">
              <h4 className="font-semibold text-indigo-800 text-sm sm:text-base">7. Data Localisation</h4>
              <p className="text-xs sm:text-sm text-gray-600">Restrict international transfers</p>
            </div>
            <div className="bg-gradient-to-r from-teal-50 to-teal-100 p-3 sm:p-4 rounded-lg border-l-4 border-teal-500">
              <h4 className="font-semibold text-teal-800 text-sm sm:text-base">8. Security</h4>
              <p className="text-xs sm:text-sm text-gray-600">Implement appropriate safeguards</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'international-transfer',
      title: 'International Data Transfers',
      subtitle: 'Strict Controls on Cross-Border Data Movement',
      content: (
        <div className="space-y-6">
          <div className="text-center">
            <Globe className="w-12 h-12 sm:w-16 md:w-16 mx-auto text-blue-600 mb-4" />
            <p className="text-base sm:text-lg font-medium text-gray-700">Data can only be transferred outside Kenya under specific conditions</p>
          </div>
          <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
            <div className="bg-green-50 p-4 sm:p-6 rounded-xl border border-green-200">
              <h4 className="font-bold text-green-800 mb-4 flex items-center space-x-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Allowed When:</span>
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm">
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-3 h-3 sm:w-4 md:w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Adequate safeguards in destination country</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-3 h-3 sm:w-4 md:w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Data protection laws exist</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-3 h-3 sm:w-4 md:w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Necessary for contract performance</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-3 h-3 sm:w-4 md:w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Required for public interest</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-3 h-3 sm:w-4 md:w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Explicit consent obtained</span>
                </li>
              </ul>
            </div>
            <div className="bg-red-50 p-4 sm:p-6 rounded-xl border border-red-200">
              <h4 className="font-bold text-red-800 mb-4 flex items-center space-x-2">
                <AlertTriangle className="w-5 h-5" />
                <span>Required Safeguards:</span>
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm">
                <li className="flex items-start space-x-2">
                  <AlertTriangle className="w-3 h-3 sm:w-4 md:w-4 text-red-600 mt-0.5 flex-shrink-0" />
                  <span>Proof of adequate protection</span>
                </li>
                <li className="flex items-start space-x-2">
                  <AlertTriangle className="w-3 h-3 sm:w-4 md:w-4 text-red-600 mt-0.5 flex-shrink-0" />
                  <span>Data Commissioner approval</span>
                </li>
                <li className="flex items-start space-x-2">
                  <AlertTriangle className="w-3 h-3 sm:w-4 md:w-4 text-red-600 mt-0.5 flex-shrink-0" />
                  <span>Demonstration of security measures</span>
                </li>
                <li className="flex items-start space-x-2">
                  <AlertTriangle className="w-3 h-3 sm:w-4 md:w-4 text-red-600 mt-0.5 flex-shrink-0" />
                  <span>Compelling legitimate interests</span>
                </li>
                <li className="flex items-start space-x-2">
                  <AlertTriangle className="w-3 h-3 sm:w-4 md:w-4 text-red-600 mt-0.5 flex-shrink-0" />
                  <span>Enhanced consent for sensitive data</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'enforcement',
      title: 'Enforcement & Penalties',
      subtitle: 'Strong Deterrents for Non-Compliance',
      content: (
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
            <div className="bg-gradient-to-br from-red-100 to-red-200 p-4 sm:p-6 rounded-xl">
              <h4 className="font-bold text-red-800 mb-4 flex items-center space-x-2">
                <Scale className="w-5 h-5" />
                <span>Financial Penalties</span>
              </h4>
              <div className="space-y-3">
                <div className="bg-white p-3 rounded-lg">
                  <p className="font-semibold text-red-700 text-sm sm:text-base">Up to KSh 5 Million</p>
                  <p className="text-xs sm:text-sm text-gray-600">For individuals</p>
                </div>
                <div className="bg-white p-3 rounded-lg">
                  <p className="font-semibold text-red-700 text-sm sm:text-base">1% Annual Turnover</p>
                  <p className="text-xs sm:text-sm text-gray-600">For organizations (whichever is lower)</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-orange-100 to-orange-200 p-4 sm:p-6 rounded-xl">
              <h4 className="font-bold text-orange-800 mb-4 flex items-center space-x-2">
                <Scale className="w-5 h-5" />
                <span>Criminal Penalties</span>
              </h4>
              <div className="space-y-3">
                <div className="bg-white p-3 rounded-lg">
                  <p className="font-semibold text-orange-700 text-sm sm:text-base">Up to 2 Years Prison</p>
                  <p className="text-xs sm:text-sm text-gray-600">For serious violations</p>
                </div>
                <div className="bg-white p-3 rounded-lg">
                  <p className="font-semibold text-orange-700 text-sm sm:text-base">Up to 10 Years Prison</p>
                  <p className="text-xs sm:text-sm text-gray-600">For general violations</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
            <div className="flex items-start space-x-2">
              <AlertTriangle className="w-4 h-4 sm:w-5 md:w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
              <p className="text-xs sm:text-sm font-medium text-yellow-800">
                Additional penalties: Equipment forfeiture, prohibition orders, and compensation to affected individuals
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'data-science-impact',
      title: 'Impact on Data Science Workflow',
      subtitle: 'How DPA 2019 Affects Data Scientists',
      content: (
        <div className="space-y-6">
          <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 sm:p-6 rounded-xl">
              <h4 className="font-bold text-blue-800 mb-3 flex items-center space-x-2">
                <Scale className="w-5 h-5" />
                <span>Data Collection</span>
              </h4>
              <ul className="text-xs sm:text-sm space-y-2">
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-3 h-3 sm:w-4 md:w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>Obtain explicit consent</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-3 h-3 sm:w-4 md:w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>Document purpose clearly</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-3 h-3 sm:w-4 md:w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>Implement data minimization</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-3 h-3 sm:w-4 md:w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>Ensure lawful basis</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 sm:p-6 rounded-xl">
              <h4 className="font-bold text-green-800 mb-3 flex items-center space-x-2">
                <Globe className="w-5 h-5" />
                <span>Data Processing</span>
              </h4>
              <ul className="text-xs sm:text-sm space-y-2">
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-3 h-3 sm:w-4 md:w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Conduct DPIA assessments</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-3 h-3 sm:w-4 md:w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Implement privacy by design</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-3 h-3 sm:w-4 md:w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Use anonymization techniques</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-3 h-3 sm:w-4 md:w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Maintain audit trails</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 sm:p-6 rounded-xl">
              <h4 className="font-bold text-purple-800 mb-3 flex items-center space-x-2">
                <Users className="w-5 h-5" />
                <span>Model Development</span>
              </h4>
              <ul className="text-xs sm:text-sm space-y-2">
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-3 h-3 sm:w-4 md:w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span>Avoid automated decision-making</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-3 h-3 sm:w-4 md:w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span>Ensure model explainability</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-3 h-3 sm:w-4 md:w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span>Regular bias assessment</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-3 h-3 sm:w-4 md:w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span>Data retention policies</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-orange-50 p-4 sm:p-6 rounded-xl border-l-4 border-orange-400">
            <h4 className="font-bold text-orange-800 mb-3 flex items-center space-x-2">
              <Shield className="w-5 h-5" />
              <span>Key Compliance Areas for Data Scientists</span>
            </h4>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-medium">Technical Measures:</p>
                <ul className="text-xs space-y-1 ml-4">
                  <li className="flex items-start space-x-1">
                    <CheckCircle2 className="w-3 h-3 text-orange-600 mt-0.5 flex-shrink-0" />
                    <span>Encryption and pseudonymization</span>
                  </li>
                  <li className="flex items-start space-x-1">
                    <CheckCircle2 className="w-3 h-3 text-orange-600 mt-0.5 flex-shrink-0" />
                    <span>Access controls and logging</span>
                  </li>
                  <li className="flex items-start space-x-1">
                    <CheckCircle2 className="w-3 h-3 text-orange-600 mt-0.5 flex-shrink-0" />
                    <span>Data backup and recovery</span>
                  </li>
                </ul>
              </div>
              <div>
                <p className="text-sm font-medium">Organizational Measures:</p>
                <ul className="text-xs space-y-1 ml-4">
                  <li className="flex items-start space-x-1">
                    <CheckCircle2 className="w-3 h-3 text-orange-600 mt-0.5 flex-shrink-0" />
                    <span>Staff training and awareness</span>
                  </li>
                  <li className="flex items-start space-x-1">
                    <CheckCircle2 className="w-3 h-3 text-orange-600 mt-0.5 flex-shrink-0" />
                    <span>Data protection policies</span>
                  </li>
                  <li className="flex items-start space-x-1">
                    <CheckCircle2 className="w-3 h-3 text-orange-600 mt-0.5 flex-shrink-0" />
                    <span>Incident response procedures</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'case-studies',
      title: 'Real-World Applications',
      subtitle: 'Case Studies and Examples',
      content: (
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 sm:p-6 rounded-xl border border-green-200">
              <h4 className="font-bold text-green-800 mb-3 flex items-center space-x-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Good Practice Example</span>
              </h4>
              <div className="space-y-3">
                <h5 className="font-semibold text-sm sm:text-base">Mobile Banking App</h5>
                <ul className="text-xs sm:text-sm space-y-1">
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="w-3 h-3 sm:w-4 md:w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Clear consent mechanisms</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="w-3 h-3 sm:w-4 md:w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Purpose-specific data collection</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="w-3 h-3 sm:w-4 md:w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Strong encryption standards</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="w-3 h-3 sm:w-4 md:w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Regular security audits</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="w-3 h-3 sm:w-4 md:w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>User-friendly privacy controls</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-gradient-to-br from-red-50 to-red-100 p-4 sm:p-6 rounded-xl border border-red-200">
              <h4 className="font-bold text-red-800 mb-3 flex items-center space-x-2">
                <AlertTriangle className="w-5 h-5" />
                <span>Common Violations</span>
              </h4>
              <div className="space-y-3">
                <h5 className="font-semibold text-sm sm:text-base">Social Media Platform</h5>
                <ul className="text-xs sm:text-sm space-y-1">
                  <li className="flex items-start space-x-2">
                    <AlertTriangle className="w-3 h-3 sm:w-4 md:w-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <span>Unclear privacy policies</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <AlertTriangle className="w-3 h-3 sm:w-4 md:w-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <span>Excessive data collection</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <AlertTriangle className="w-3 h-3 sm:w-4 md:w-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <span>Lack of user consent</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <AlertTriangle className="w-3 h-3 sm:w-4 md:w-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <span>Unauthorized data sharing</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <AlertTriangle className="w-3 h-3 sm:w-4 md:w-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <span>Weak security measures</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="bg-blue-50 p-4 sm:p-6 rounded-xl">
            <h4 className="font-bold text-blue-800 mb-3 flex items-center space-x-2">
              <Globe className="w-5 h-5" />
              <span>Automated Decision-Making Examples in Kenya</span>
            </h4>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
              <div className="bg-white p-3 rounded-lg">
                <p className="font-medium text-xs sm:text-sm">Mobile Lending</p>
                <p className="text-xs text-gray-600">Loan approval algorithms</p>
              </div>
              <div className="bg-white p-3 rounded-lg">
                <p className="font-medium text-xs sm:text-sm">NEMIS System</p>
                <p className="text-xs text-gray-600">School selection process</p>
              </div>
              <div className="bg-white p-3 rounded-lg">
                <p className="font-medium text-xs sm:text-sm">Online Recruitment</p>
                <p className="text-xs text-gray-600">Aptitude test scoring</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'compliance-checklist',
      title: 'Compliance Checklist',
      subtitle: 'Essential Steps for Organizations',
      content: (
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
            <div className="space-y-4">
              <h4 className="font-bold text-gray-800 flex items-center space-x-2">
                <Users className="w-5 h-5" />
                <span>Organizational Requirements</span>
              </h4>
              <div className="space-y-2">
                <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 md:w-5 text-green-600 flex-shrink-0" />
                  <span className="text-xs sm:text-sm">Register with Data Commissioner</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 md:w-5 text-green-600 flex-shrink-0" />
                  <span className="text-xs sm:text-sm">Appoint Data Protection Officer</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 md:w-5 text-green-600 flex-shrink-0" />
                  <span className="text-xs sm:text-sm">Develop privacy policies</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 md:w-5 text-green-600 flex-shrink-0" />
                  <span className="text-xs sm:text-sm">Conduct staff training</span>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="font-bold text-gray-800 flex items-center space-x-2">
                <Shield className="w-5 h-5" />
                <span>Technical Requirements</span>
              </h4>
              <div className="space-y-2">
                <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 md:w-5 text-blue-600 flex-shrink-0" />
                  <span className="text-xs sm:text-sm">Implement data encryption</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 md:w-5 text-blue-600 flex-shrink-0" />
                  <span className="text-xs sm:text-sm">Set up access controls</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 md:w-5 text-blue-600 flex-shrink-0" />
                  <span className="text-xs sm:text-sm">Establish audit logging</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 md:w-5 text-blue-600 flex-shrink-0" />
                  <span className="text-xs sm:text-sm">Plan incident response</span>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-purple-50 p-4 sm:p-6 rounded-xl">
            <h4 className="font-bold text-purple-800 mb-3 flex items-center space-x-2">
              <Calendar className="w-5 h-5" />
              <span>Regular Compliance Activities</span>
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <div className="bg-white p-3 rounded-lg text-center">
                <p className="text-xs sm:text-sm font-medium">Quarterly</p>
                <p className="text-xs text-gray-600">Security reviews</p>
              </div>
              <div className="bg-white p-3 rounded-lg text-center">
                <p className="text-xs sm:text-sm font-medium">Annually</p>
                <p className="text-xs text-gray-600">DPIA updates</p>
              </div>
              <div className="bg-white p-3 rounded-lg text-center">
                <p className="text-xs sm:text-sm font-medium">Ongoing</p>
                <p className="text-xs text-gray-600">Breach monitoring</p>
              </div>
              <div className="bg-white p-3 rounded-lg text-center">
                <p className="text-xs sm:text-sm font-medium">As needed</p>
                <p className="text-xs text-gray-600">Policy updates</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'conclusion',
      title: 'Conclusion',
      subtitle: 'Building a Privacy-First Culture',
      content: (
        <div className="text-center space-y-6 sm:space-y-8">
          <div className="space-y-6">
            <Shield className="w-16 h-16 sm:w-20 md:w-20 mx-auto text-blue-600" />
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Data Protection Act 2019</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              A comprehensive framework that empowers individuals, protects privacy, and ensures responsible data handling in Kenya's digital economy.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-4 sm:p-6 rounded-xl">
              <h4 className="font-bold mb-2 text-sm sm:text-base">For Individuals</h4>
              <p className="text-xs sm:text-sm opacity-90">Enhanced control over personal data and stronger privacy rights</p>
            </div>
            <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-4 sm:p-6 rounded-xl">
              <h4 className="font-bold mb-2 text-sm sm:text-base">For Organizations</h4>
              <p className="text-xs sm:text-sm opacity-90">Clear compliance framework and risk management guidelines</p>
            </div>
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-4 sm:p-6 rounded-xl">
              <h4 className="font-bold mb-2 text-sm sm:text-base">For Data Scientists</h4>
              <p className="text-xs sm:text-sm opacity-90">Ethical guidelines for responsible data science practices</p>
            </div>
          </div>
          <div className="text-base sm:text-lg font-medium text-gray-700 flex items-center justify-center space-x-2">
            <Heart className="w-5 h-5 text-red-500" />
            <span>Thank you for your attention!</span>
          </div>
        </div>
      )
    }
  ];

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide(currentSlide + 1);
        setIsTransitioning(false);
      }, 150);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide(currentSlide - 1);
        setIsTransitioning(false);
      }, 150);
    }
  };

  const goToSlide = (index: number) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide(index);
      setIsTransitioning(false);
    }, 150);
  };

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight' || event.key === ' ') {
        nextSlide();
      } else if (event.key === 'ArrowLeft') {
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentSlide]);

  const progress = ((currentSlide + 1) / slides.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3 sm:space-x-4">
              <Shield className="w-6 h-6 sm:w-8 md:w-8 text-blue-600 flex-shrink-0" />
              <div>
                <h1 className="text-base sm:text-lg font-semibold text-gray-800">DPA 2019 Presentation</h1>
                <p className="text-xs sm:text-sm text-gray-500">
                  Slide {currentSlide + 1} of {slides.length}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-3 sm:space-x-4">
              <Progress value={progress} className="w-20 sm:w-32" />
              <span className="text-xs sm:text-sm text-gray-500 hidden sm:inline">{Math.round(progress)}%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-3 sm:px-4 py-4 sm:py-8">
        <div className={`transition-all duration-300 ${isTransitioning ? 'opacity-50 scale-95' : 'opacity-100 scale-100'}`}>
          <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 md:p-8 min-h-[500px] sm:min-h-[600px]">
            <div className="mb-6 sm:mb-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                {slides[currentSlide].title}
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600">{slides[currentSlide].subtitle}</p>
            </div>
            <div className="animate-fade-in">
              {slides[currentSlide].content}
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-6 sm:mt-8">
          <Button
            variant="outline"
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="flex items-center space-x-2 text-xs sm:text-sm"
            size="sm"
          >
            <ChevronLeft className="w-3 h-3 sm:w-4 md:w-4" />
            <span className="hidden sm:inline">Previous</span>
            <span className="sm:hidden">Prev</span>
          </Button>

          <div className="flex space-x-1 sm:space-x-2 overflow-x-auto max-w-xs sm:max-w-none">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 sm:w-3 md:w-3 sm:h-3 md:h-3 rounded-full transition-all duration-200 flex-shrink-0 ${
                  index === currentSlide 
                    ? 'bg-blue-600 scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>

          <Button
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className="flex items-center space-x-2 text-xs sm:text-sm"
            size="sm"
          >
            <span className="hidden sm:inline">Next</span>
            <span className="sm:hidden">Next</span>
            <ChevronRight className="w-3 h-3 sm:w-4 md:w-4" />
          </Button>
        </div>

        {/* Slide Thumbnails */}
        <div className="mt-6 sm:mt-8 bg-white rounded-xl shadow-lg p-4 sm:p-6">
          <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 sm:mb-4">Slide Navigation</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-2 sm:gap-3">
            {slides.map((slide, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`p-2 sm:p-3 rounded-lg text-left transition-all duration-200 ${
                  index === currentSlide 
                    ? 'bg-blue-100 border-2 border-blue-500 scale-105' 
                    : 'bg-gray-50 border border-gray-200 hover:bg-gray-100'
                }`}
              >
                <div className="text-xs font-medium text-gray-600 mb-1">
                  {index + 1}
                </div>
                <div className="text-xs text-gray-800 line-clamp-2">
                  {slide.title}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-800 text-white py-3 sm:py-4">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 text-center">
          <p className="text-xs sm:text-sm">
            Use arrow keys or space bar to navigate • Click slide numbers to jump to specific slides
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
