'use client'

import { useState } from 'react'
import { Heart, DollarSign, Shield, Users, CheckCircle } from 'lucide-react'

export default function DonatePage() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null)
  const [customAmount, setCustomAmount] = useState('')

  const presetAmounts = [25, 50, 100, 250, 500]

  const handleDonate = () => {
    const amount = selectedAmount || parseFloat(customAmount)
    if (!amount || amount <= 0) {
      alert('Please select or enter a donation amount')
      return
    }
    // Placeholder for Stripe integration
    alert(`Redirecting to payment for $${amount.toFixed(2)}...`)
    // In production: window.location.href = `/api/checkout?amount=${amount}`
  }

  return (
    <>
      {/* Hero */}
      <section className="relative h-[400px] flex items-center justify-center text-white bg-fire-dark">
        <div className="container-custom text-center">
          <Heart className="w-16 h-16 mx-auto mb-4 text-fire-orange" aria-hidden="true" />
          <h1 className="mb-4">Support TFS Fire Department</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Your donation helps us protect lives, property, and our community
          </p>
        </div>
      </section>

      {/* Why Donate */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center mb-12">How Your Donation Helps</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div className="text-center p-6 bg-fire-red/5 rounded-lg">
                <Shield className="w-12 h-12 mx-auto mb-4 text-fire-red" aria-hidden="true" />
                <h3 className="font-bold mb-2">Equipment</h3>
                <p className="text-sm text-fire-dark/70">
                  Modern firefighting equipment and protective gear
                </p>
              </div>
              <div className="text-center p-6 bg-fire-orange/5 rounded-lg">
                <Users className="w-12 h-12 mx-auto mb-4 text-fire-orange" aria-hidden="true" />
                <h3 className="font-bold mb-2">Training</h3>
                <p className="text-sm text-fire-dark/70">
                  Professional training programs for volunteers
                </p>
              </div>
              <div className="text-center p-6 bg-fire-yellow/5 rounded-lg">
                <DollarSign className="w-12 h-12 mx-auto mb-4 text-fire-yellow" aria-hidden="true" />
                <h3 className="font-bold mb-2">Operations</h3>
                <p className="text-sm text-fire-dark/70">
                  Day-to-day operational costs and maintenance
                </p>
              </div>
              <div className="text-center p-6 bg-fire-red/5 rounded-lg">
                <Heart className="w-12 h-12 mx-auto mb-4 text-fire-red" aria-hidden="true" />
                <h3 className="font-bold mb-2">Community</h3>
                <p className="text-sm text-fire-dark/70">
                  Outreach programs and safety education
                </p>
              </div>
            </div>

            <div className="bg-fire-dark/5 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Your Impact</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-fire-red mr-3 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span>$50 provides essential protective gear for one volunteer</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-fire-red mr-3 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span>$100 funds a community fire safety workshop</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-fire-red mr-3 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span>$250 supports specialized wildland firefighting training</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-fire-red mr-3 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span>$500 helps maintain and upgrade firefighting equipment</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Form */}
      <section className="section-padding bg-fire-dark/5">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-6 text-center">Make a Donation</h2>

            <div className="mb-8">
              <label className="block text-sm font-semibold mb-4">
                Select Amount
              </label>
              <div className="grid grid-cols-3 md:grid-cols-5 gap-4 mb-4">
                {presetAmounts.map((amount) => (
                  <button
                    key={amount}
                    type="button"
                    onClick={() => {
                      setSelectedAmount(amount)
                      setCustomAmount('')
                    }}
                    className={`p-4 rounded-lg border-2 font-semibold transition-colors ${
                      selectedAmount === amount
                        ? 'border-fire-red bg-fire-red text-white'
                        : 'border-fire-dark/20 hover:border-fire-red'
                    }`}
                  >
                    ${amount}
                  </button>
                ))}
              </div>
              <div className="mt-4">
                <label htmlFor="custom-amount" className="block text-sm font-semibold mb-2">
                  Or enter custom amount
                </label>
                <div className="flex items-center">
                  <span className="text-fire-dark/60 mr-2">$</span>
                  <input
                    type="number"
                    id="custom-amount"
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value)
                      setSelectedAmount(null)
                    }}
                    placeholder="0.00"
                    min="1"
                    step="0.01"
                    className="flex-1 px-4 py-3 border border-fire-dark/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-fire-red"
                  />
                </div>
              </div>
            </div>

            <div className="mb-6 p-4 bg-fire-red/5 border-l-4 border-fire-red rounded">
              <p className="text-sm text-fire-dark/70">
                <strong>Note:</strong> TFS Volunteer Fire Department is a 501(c)(3) nonprofit organization. 
                Your donation may be tax-deductible. Please consult with a tax professional for specific advice.
              </p>
            </div>

            <button
              onClick={handleDonate}
              className="btn-primary w-full text-lg py-4"
            >
              Continue to Payment
            </button>

            <p className="text-center text-sm text-fire-dark/60 mt-4">
              Secure payment processing via Stripe. Your information is protected.
            </p>
          </div>
        </div>
      </section>

      {/* Other Ways to Support */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center mb-12">Other Ways to Support</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 border border-fire-red/20 rounded-lg">
                <h3 className="text-xl font-bold mb-3">Volunteer</h3>
                <p className="text-fire-dark/70 mb-4">
                  Join our team of dedicated volunteers and make a direct impact in your community.
                </p>
                <a href="/volunteer" className="text-fire-red hover:underline font-semibold">
                  Learn about volunteering →
                </a>
              </div>
              <div className="p-6 border border-fire-orange/20 rounded-lg">
                <h3 className="text-xl font-bold mb-3">In-Kind Donations</h3>
                <p className="text-fire-dark/70 mb-4">
                  We accept equipment, supplies, and other in-kind donations. Contact us to discuss.
                </p>
                <a href="/contact" className="text-fire-red hover:underline font-semibold">
                  Contact us →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
