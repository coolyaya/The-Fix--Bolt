import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import { MessageCircle, Phone, Mail, HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

const Support: React.FC = () => {
  const [chatMessage, setChatMessage] = useState('');
  const [chatHistory, setChatHistory] = useState<Array<{type: 'user' | 'bot', message: string}>>([
    { type: 'bot', message: 'Hi! I\'m here to help with your phone repair needs. What issue are you experiencing?' }
  ]);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: 'How long does a typical screen repair take?',
      answer: 'Most screen repairs are completed within 30-60 minutes, depending on the device model. We stock screens for popular devices and can often complete repairs while you wait.'
    },
    {
      question: 'Do you offer a warranty on repairs?',
      answer: 'Yes! We provide a comprehensive 90-day warranty on all repairs and replacement parts. This covers both parts and labor, giving you peace of mind.'
    },
    {
      question: 'What if my phone won\'t turn on?',
      answer: 'Bring it in for a free diagnostic. We can often fix power issues related to charging ports, batteries, or software. Our diagnostic service will identify the exact problem before any repair work begins.'
    },
    {
      question: 'Do you repair water-damaged phones?',
      answer: 'Yes, we specialize in water damage recovery. The sooner you bring it in, the better the chances of recovery. We use professional cleaning solutions and techniques to restore water-damaged devices.'
    },
    {
      question: 'What brands do you repair?',
      answer: 'We repair all major brands including iPhone, Samsung, Google Pixel, OnePlus, LG, Motorola, and many others. If you have a less common device, just ask - we likely can help!'
    },
    {
      question: 'Do you offer pickup and delivery?',
      answer: 'Yes, we offer convenient pickup and delivery service within our service area. Contact us to schedule a pickup, and we\'ll handle the rest.'
    }
  ];

  const handleSendMessage = () => {
    if (!chatMessage.trim()) return;

    const newUserMessage = { type: 'user' as const, message: chatMessage };
    setChatHistory(prev => [...prev, newUserMessage]);

    // Simple bot responses
    let botResponse = '';
    const lowerMessage = chatMessage.toLowerCase();
    
    if (lowerMessage.includes('screen') || lowerMessage.includes('crack')) {
      botResponse = 'Screen issues are our specialty! We can usually fix cracked screens in 30-60 minutes with premium quality parts. Would you like to book a repair or get a quote?';
    } else if (lowerMessage.includes('battery') || lowerMessage.includes('charge')) {
      botResponse = 'Battery problems are common and we can help! We offer battery replacements starting at $59 with a 90-day warranty. Would you like to schedule a diagnostic?';
    } else if (lowerMessage.includes('water') || lowerMessage.includes('wet')) {
      botResponse = 'Water damage needs immediate attention! Please bring your device in ASAP for the best chance of recovery. We offer free diagnostics for water damage cases.';
    } else if (lowerMessage.includes('price') || lowerMessage.includes('cost')) {
      botResponse = 'Pricing varies by device and repair type. Screen repairs start at $79, battery replacements at $59. Would you like a specific quote for your device?';
    } else {
      botResponse = 'I understand you\'re having an issue. For the best help, I\'d recommend booking a free diagnostic or speaking with one of our technicians. Would you like me to help you schedule an appointment?';
    }

    setTimeout(() => {
      setChatHistory(prev => [...prev, { type: 'bot', message: botResponse }]);
    }, 1000);

    setChatMessage('');
  };

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  return (
    <>
      <PageHero 
        title="Customer Support"
        subtitle="Get help fast — try our AI assistant or talk to a human."
      />

      <section className="py-20 relative">
        <div className="max-w-[1200px] mx-auto px-[clamp(16px,4vw,32px)]">
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* AI Chat Interface */}
            <div className="support-card transition-all duration-300">
              <div className="flex items-center mb-6">
                <MessageCircle className="w-6 h-6 mr-3" style={{ color: '#FF4FA8' }} />
                <h3 className="font-bold uppercase tracking-wide">
                  AI Support Chat
                </h3>
              </div>

              <p className="mb-6">
                Need help? Chat with our AI support — get quick answers or file a repair request.
              </p>

              {/* Chat History */}
              <div className="bg-gray-50 rounded-lg p-4 h-64 overflow-y-auto mb-4 space-y-3">
                {chatHistory.map((chat, index) => (
                  <div
                    key={index}
                    className={`flex ${chat.type === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-xs px-4 py-2 rounded-lg ${
                        chat.type === 'user'
                          ? 'bg-gradient-to-r from-blue-600 to-pink-600 text-white shadow-lg'
                          : 'bg-white border border-gray-200 shadow-sm'
                      }`}
                      style={chat.type === 'bot' ? { color: 'var(--text)' } : {}}
                    >
                      {chat.message}
                    </div>
                  </div>
                ))}
              </div>

              {/* Chat Input */}
              <div className="flex gap-2 mb-4">
                <input
                  type="text"
                  value={chatMessage}
                  onChange={(e) => setChatMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Describe your phone issue..."
                  className="flex-1 px-4 py-2 bg-white border border-gray-300 rounded-lg focus:border-pink-500 focus:outline-none transition-colors duration-300"
                />
                <button
                  onClick={handleSendMessage}
                  className="px-6 py-2 bg-gradient-to-r from-blue-600 to-pink-600 text-white font-bold rounded-lg hover:shadow-lg transition-all duration-300"
                >
                  Send
                </button>
              </div>

              <div className="flex gap-4">
                <button className="learn font-medium text-sm transition-colors duration-300">
                  Escalate to Human Support
                </button>
                <Link 
                  to="/contact"
                  className="learn font-medium text-sm transition-colors duration-300"
                >
                  Book a Repair
                </Link>
              </div>
            </div>

            {/* Contact Options */}
            <div className="support-card transition-all duration-300">
              <div className="flex items-center mb-6">
                <HelpCircle className="w-6 h-6 mr-3" style={{ color: '#FF4FA8' }} />
                <h3 className="font-bold uppercase tracking-wide">
                  Other Ways to Get Help
                </h3>
              </div>

              <div className="space-y-6">
                <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                  <Phone className="w-8 h-8 mr-4" style={{ color: '#FF4FA8' }} />
                  <div>
                    <h4 className="font-bold" style={{ color: 'var(--text)' }}>Call Us</h4>
                    <p style={{ color: 'var(--text)' }}>(321) 555-0123</p>
                    <p className="text-sm" style={{ color: 'var(--muted)' }}>Mon-Fri: 9AM-7PM</p>
                  </div>
                </div>

                <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                  <Mail className="w-8 h-8 mr-4" style={{ color: '#FF4FA8' }} />
                  <div>
                    <h4 className="font-bold" style={{ color: 'var(--text)' }}>Email Us</h4>
                    <p style={{ color: 'var(--text)' }}>help@thefix.com</p>
                    <p className="text-sm" style={{ color: 'var(--muted)' }}>Response within 2 hours</p>
                  </div>
                </div>

                <div className="text-center pt-4">
                  <Link
                    to="/contact"
                    className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-pink-600 text-white font-bold uppercase tracking-wide rounded-lg hover:shadow-lg transition-all duration-300"
                  >
                    Get a Quote
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="feature-block">
            <h3 className="text-3xl font-bold text-center mb-8 uppercase tracking-wide">
              Frequently Asked Questions
            </h3>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full p-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors duration-300 flex justify-between items-center"
                  >
                    <h4 className="font-bold" style={{ color: 'var(--text)' }}>{faq.question}</h4>
                    {expandedFaq === index ? (
                      <ChevronUp className="w-5 h-5 text-pink-400" />
                    ) : (
                      <ChevronDown className="w-5 h-5" style={{ color: 'var(--muted)' }} />
                    )}
                  </button>
                  
                  {expandedFaq === index && (
                    <div className="p-4 bg-white border-t border-gray-200">
                      <p className="leading-relaxed" style={{ color: 'var(--muted)' }}>{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Support;