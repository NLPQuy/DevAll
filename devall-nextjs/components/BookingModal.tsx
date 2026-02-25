'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Clock, User, Mail, Phone, Package, MessageSquare, CheckCircle } from 'lucide-react';
import { useState } from 'react';

// Zod validation schema
const bookingSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100, 'Name too long'),
  email: z.string().email('Invalid email address'),
  phone: z.string().regex(/^[0-9]{10,11}$/, 'Phone must be 10-11 digits'),
  service: z.string().optional(),
  preferredDate: z.string().min(1, 'Please select a preferred date'),
  preferredTime: z.string().min(1, 'Please select a preferred time'),
  message: z.string().max(500, 'Message too long').optional(),
});

type BookingFormData = z.infer<typeof bookingSchema>;

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [isSuccess, setIsSuccess] = useState(false);
  const [bookingId, setBookingId] = useState('');

  const { 
    register, 
    handleSubmit, 
    formState: { errors, isSubmitting }, 
    reset 
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
  });

  const onSubmit = async (data: BookingFormData) => {
    try {
      const response = await fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setBookingId(result.bookingId);
        setIsSuccess(true);
        reset();
        // Auto close after 5 seconds
        setTimeout(() => {
          setIsSuccess(false);
          onClose();
        }, 5000);
      } else {
        alert(result.error || 'An error occurred. Please try again later.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  const handleClose = () => {
    if (!isSubmitting) {
      setIsSuccess(false);
      reset();
      onClose();
    }
  };

  // Get today's date in YYYY-MM-DD format for min date
  const today = new Date().toISOString().split('T')[0];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              {/* Success State */}
              {isSuccess ? (
                <div className="p-10 text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', duration: 0.5 }}
                  >
                    <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
                  </motion.div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Booking Confirmed!</h2>
                  <p className="text-lg text-gray-600 mb-4">
                    Thank you for booking a consultation with DevAll.
                  </p>
                  <div className="bg-gray-50 rounded-xl p-4 mb-6">
                    <p className="text-sm text-gray-500 mb-1">Booking ID</p>
                    <p className="text-xl font-bold text-gray-800">{bookingId}</p>
                  </div>
                  <p className="text-gray-600">
                    We will contact you shortly to confirm the details.
                  </p>
                  <button
                    onClick={handleClose}
                    className="mt-6 px-8 py-3 bg-gradient-to-r from-gray-800 to-black text-white rounded-xl font-bold hover:scale-105 transition-transform"
                  >
                    Close
                  </button>
                </div>
              ) : (
                <>
                  {/* Header */}
                  <div className="flex items-center justify-between p-6 border-b border-gray-200">
                    <div className="flex items-center space-x-3">
                      <Calendar className="w-8 h-8 text-gray-800" />
                      <h2 className="text-2xl font-bold text-gray-900">Book Consultation</h2>
                    </div>
                    <button
                      onClick={handleClose}
                      className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                      disabled={isSubmitting}
                    >
                      <X className="w-6 h-6 text-gray-600" />
                    </button>
                  </div>

                  {/* Form */}
                  <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-5">
                    {/* Name */}
                    <div>
                      <label className="flex items-center text-gray-700 font-semibold mb-2">
                        <User className="w-4 h-4 mr-2 text-gray-800" />
                        Full Name <span className="text-gray-800 ml-1">*</span>
                      </label>
                      <input
                        {...register('name')}
                        type="text"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-gray-800 focus:outline-none transition-colors"
                        placeholder="John Doe"
                      />
                      {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="flex items-center text-gray-700 font-semibold mb-2">
                        <Mail className="w-4 h-4 mr-2 text-gray-800" />
                        Email <span className="text-gray-800 ml-1">*</span>
                      </label>
                      <input
                        {...register('email')}
                        type="email"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-gray-800 focus:outline-none transition-colors"
                        placeholder="example@email.com"
                      />
                      {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="flex items-center text-gray-700 font-semibold mb-2">
                        <Phone className="w-4 h-4 mr-2 text-gray-800" />
                        Phone <span className="text-gray-800 ml-1">*</span>
                      </label>
                      <input
                        {...register('phone')}
                        type="tel"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-gray-800 focus:outline-none transition-colors"
                        placeholder="0901234567"
                      />
                      {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
                    </div>

                    {/* Service */}
                    <div>
                      <label className="flex items-center text-gray-700 font-semibold mb-2">
                        <Package className="w-4 h-4 mr-2 text-gray-800" />
                        Service of Interest
                      </label>
                      <select
                        {...register('service')}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-gray-800 focus:outline-none transition-colors"
                      >
                        <option value="">Select service</option>
                        <option value="data">Data Solutions</option>
                        <option value="ai">AI & Machine Learning</option>
                        <option value="web">Web Development</option>
                        <option value="app">App Development</option>
                        <option value="consultation">General Consultation</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    {/* Date & Time */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="flex items-center text-gray-700 font-semibold mb-2">
                          <Calendar className="w-4 h-4 mr-2 text-gray-800" />
                          Preferred Date <span className="text-gray-800 ml-1">*</span>
                        </label>
                        <input
                          {...register('preferredDate')}
                          type="date"
                          min={today}
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-gray-800 focus:outline-none transition-colors"
                        />
                        {errors.preferredDate && <p className="text-red-500 text-sm mt-1">{errors.preferredDate.message}</p>}
                      </div>

                      <div>
                        <label className="flex items-center text-gray-700 font-semibold mb-2">
                          <Clock className="w-4 h-4 mr-2 text-gray-800" />
                          Preferred Time <span className="text-gray-800 ml-1">*</span>
                        </label>
                        <select
                          {...register('preferredTime')}
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-gray-800 focus:outline-none transition-colors"
                        >
                          <option value="">Select time</option>
                          <option value="morning">Morning (9:00 - 12:00)</option>
                          <option value="afternoon">Afternoon (14:00 - 17:00)</option>
                          <option value="evening">Evening (18:00 - 20:00)</option>
                        </select>
                        {errors.preferredTime && <p className="text-red-500 text-sm mt-1">{errors.preferredTime.message}</p>}
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="flex items-center text-gray-700 font-semibold mb-2">
                        <MessageSquare className="w-4 h-4 mr-2 text-gray-800" />
                        Additional Notes
                      </label>
                      <textarea
                        {...register('message')}
                        rows={3}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-gray-800 focus:outline-none transition-colors resize-none"
                        placeholder="Any specific topics or questions you'd like to discuss..."
                      />
                      {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 bg-gradient-to-r from-gray-800 to-black text-white font-bold rounded-xl hover:scale-105 transition-transform shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          <span>Processing...</span>
                        </>
                      ) : (
                        <>
                          <Calendar className="w-5 h-5" />
                          <span>Confirm Booking</span>
                        </>
                      )}
                    </button>
                  </form>
                </>
              )}
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
