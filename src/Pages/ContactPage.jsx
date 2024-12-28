import { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function ContactUS() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="relative py-24" style={{ backgroundImage: 'url("/src/assets/laptop.webp")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
  <div className="absolute inset-0 bg-[#003049] opacity-60"></div> {/* Overlay */}
  <div className="relative container mx-auto px-4">
    <div className="text-center">
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact Us</h1>
      <p className="text-xl text-gray-200 max-w-2xl mx-auto">
        Get in touch with our team. We're here to help and answer any questions you might have.
      </p>
    </div>
  </div>
</div>


      {/* Contact Section Container */}
      <div className="bg-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#003049] rounded-lg shadow-lg grid grid-cols-1 md:grid-cols-2 gap-12 p-8">
            {/* Left Column: Company Details */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-[#D62828]">Contact Details</h2>
              <p className="text-white">Get in touch with us through the following channels. We're here to assist you with any questions or concerns.</p>

              {/* Contact Information Cards */}
              <div className="space-y-4">
                <div className="flex items-start space-x-4 p-4 rounded-lg bg-gray-50">
                  <MapPin className="w-6 h-6 text-[#D62828] mt-1" />
                  <div>
                    <h3 className="font-semibold">Our Location</h3>
                    <p className="text-gray-600">Islamabad City, Pakistan</p>
                    <p className="text-gray-600">Lahore City, Pakistan</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 rounded-lg bg-gray-50">
                  <Phone className="w-6 h-6 text-[#D62828] mt-1" />
                  <div>
                    <h3 className="font-semibold">Phone Number</h3>
                    <p className="text-gray-600">+92 123 4567890</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 rounded-lg bg-gray-50">
                  <Mail className="w-6 h-6 text-[#D62828] mt-1" />
                  <div>
                    <h3 className="font-semibold">Email Address</h3>
                    <p className="text-gray-600">info@techvexa.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 rounded-lg bg-gray-50">
                  <Clock className="w-6 h-6 text-[#D62828] mt-1" />
                  <div>
                    <h3 className="font-semibold">Working Hours</h3>
                    <p className="text-gray-600">Mon - Fri: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Saturday: 9:00 AM - 1:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D62828] focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D62828] focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D62828] focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D62828] focus:border-transparent"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#D62828] text-white py-3 px-6 rounded-lg hover:bg-[#D62828] transition-colors duration-200"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
