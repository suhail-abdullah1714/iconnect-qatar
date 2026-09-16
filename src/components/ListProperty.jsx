import {  useState } from 'react'
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Home,
  MessageCircle,
  MapPin,
  ShieldCheck,
} from 'lucide-react'
import { openWhatsApp } from '../utils/whatsapp'

function ListProperty() {
  const [step, setStep] = useState(1)
  const [errors, setErrors] = useState({})

  const [form, setForm] = useState({
    propertyType: '',
    location: '',
    bedrooms: '',
    bathrooms: '',
    furnishing: '',
    rent: '',
    deposit: '',
    availableFrom: '',
    description: '',
    ownerName: '',
    whatsapp: '',
  })

  const totalSteps = 4

  

  const updateForm = (field, value) => {
    setForm((current) => ({
      ...current,
      [field]: value,
    }))

    setErrors((current) => ({
      ...current,
      [field]: '',
    }))
  }

  const validateStep = () => {
    const newErrors = {}

    if (step === 1 && !form.propertyType) {
      newErrors.propertyType =
        'Please select the property type.'
    }

    if (step === 2) {
      if (!form.location.trim()) {
        newErrors.location =
          'Please enter the property location.'
      }

      if (!form.bedrooms) {
        newErrors.bedrooms =
          'Please select the number of bedrooms.'
      }

      if (!form.bathrooms) {
        newErrors.bathrooms =
          'Please select the number of bathrooms.'
      }
    }

    if (step === 3) {
      if (!form.furnishing) {
        newErrors.furnishing =
          'Please select a furnishing option.'
      }

      if (!form.rent.trim()) {
        newErrors.rent =
          'Please enter the expected monthly rent.'
      }
    }

    if (step === 4) {
      if (!form.ownerName.trim()) {
        newErrors.ownerName =
          'Please enter your name.'
      }

      if (!form.whatsapp.trim()) {
        newErrors.whatsapp =
          'Please enter your WhatsApp number.'
      } else {
        const digits = form.whatsapp.replace(/\D/g, '')

        if (digits.length < 8) {
          newErrors.whatsapp =
            'Please enter a valid WhatsApp number.'
        }
      }
    }

    setErrors(newErrors)

    return Object.keys(newErrors).length === 0
  }

  const nextStep = () => {
    if (!validateStep()) {
      return
    }

    if (step < totalSteps) {
      setStep((current) => current + 1)
    }
  }

  const previousStep = () => {
    if (step > 1) {
      setErrors({})
      setStep((current) => current - 1)
    }
  }

  const sendToWhatsApp = () => {
    if (!validateStep()) {
      return
    }

    const message = `
Hello IConnect Qatar,

I would like to list my property through IConnect.

PROPERTY DETAILS
----------------
Property Type: ${form.propertyType || 'Not specified'}
Location: ${form.location || 'Not specified'}
Bedrooms: ${form.bedrooms || 'Not specified'}
Bathrooms: ${form.bathrooms || 'Not specified'}
Furnishing: ${form.furnishing || 'Not specified'}

Expected Monthly Rent: ${form.rent || 'Not specified'}
Expected Deposit: ${form.deposit || 'Not specified'}
Available From: ${form.availableFrom || 'Not specified'}

Description:
${form.description || 'None'}

OWNER DETAILS
-------------
Name: ${form.ownerName || 'Not provided'}
WhatsApp: ${form.whatsapp || 'Not provided'}

Please contact me regarding listing this property.

Thank you.
    `.trim()

    openWhatsApp(message)
  }

  const propertyTypes = [
    'Apartment',
    'Villa',
    'Studio',
    'Room',
  ]

  const bedrooms = [
    'Studio',
    '1 Bedroom',
    '2 Bedrooms',
    '3 Bedrooms',
    '4+ Bedrooms',
  ]

  const bathrooms = [
    '1 Bathroom',
    '2 Bathrooms',
    '3 Bathrooms',
    '4+ Bathrooms',
  ]

  const furnishing = [
    'Furnished',
    'Semi Furnished',
    'Unfurnished',
  ]

  const stepTitles = [
    'What are you listing?',
    'Tell us about the property.',
    'What are your rental expectations?',
    'How can we contact you?',
  ]

  const stepDescriptions = [
    'Start by choosing the type of property you would like to list.',
    'Give us the basic details so we understand the property.',
    'Tell us about your rental expectations and availability.',
    'Add your contact details so our team can reach you.',
  ]

  return (
    <section
      id="list-property"
      className="relative overflow-hidden bg-[#F7F5F0] px-5 py-20 sm:px-6 md:px-10 md:py-32 lg:px-14"
    >

      {/* Decorative background */}
      <div className="pointer-events-none absolute -right-40 top-10 h-[500px] w-[500px] rounded-full border border-[#B08A4A]/10" />

      <div className="pointer-events-none absolute -left-32 bottom-20 h-72 w-72 rounded-full border border-[#B08A4A]/10" />

      <div className="pointer-events-none absolute right-0 top-0 h-72 w-72 rounded-full bg-[#EFE8DA]/50 blur-3xl" />

      <div className="relative mx-auto max-w-[1440px]">

        {/* ================= HEADER ================= */}

        <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-end lg:gap-10">

          <div className="max-w-3xl">

            <div className="flex items-center gap-3">

              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#B08A4A]/30 bg-[#EFE8DA] sm:h-9 sm:w-9">

                <Home
                  size={14}
                  strokeWidth={1.7}
                  className="text-[#B08A4A]"
                />

              </span>

              <p className="text-[9px] font-medium uppercase tracking-[0.27em] text-[#B08A4A] sm:text-[10px] sm:tracking-[0.3em]">
                For property owners
              </p>

            </div>

            <h2 className="mt-6 text-[2.7rem] font-medium leading-[0.94] tracking-[-0.055em] text-[#171717] sm:text-5xl md:mt-7 md:text-6xl lg:text-7xl">

              Have a property
              <br />

              <span className="font-serif italic text-[#B08A4A]">
                to rent?
              </span>

            </h2>

          </div>

          <div className="max-w-md lg:ml-auto">

            <p className="text-[14px] leading-6 text-[#6F6B63] sm:text-base sm:leading-7 md:text-lg md:leading-8">
              Share your property details with IConnect.
              Our team can review your property and connect
              with suitable rental enquiries across Qatar.
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2 text-[9px] uppercase tracking-[0.16em] text-[#8A857C] sm:mt-6 sm:text-xs">

              <span className="h-px w-7 bg-[#B08A4A]" />

              <span>Simple</span>

              <span>•</span>

              <span>Direct</span>

              <span>•</span>

              <span>WhatsApp</span>

            </div>

          </div>

        </div>

        {/* ================= MAIN CARD ================= */}

        <div className="mt-12 overflow-hidden rounded-[24px] border border-[#E2DCD1] bg-white shadow-[0_25px_80px_rgba(35,30,20,0.07)] sm:mt-16 sm:rounded-[28px] md:mt-20">

          {/* ================= PROGRESS ================= */}

          <div className="border-b border-[#ECE7DE] px-5 py-5 sm:px-7 md:px-9">

            <div className="flex items-center justify-between">

              <div>

                <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#B08A4A] sm:text-[10px] sm:tracking-[0.22em]">
                  Listing setup
                </p>

                <p className="mt-1 text-[10px] text-[#99938A] sm:text-xs">
                  Step {step} of {totalSteps}
                </p>

              </div>

              <span className="text-[10px] font-medium text-[#99938A] sm:text-xs">
                {Math.round(
                  (step / totalSteps) * 100
                )}
                %
              </span>

            </div>

            {/* Progress bar */}
            <div className="mt-4 h-1 overflow-hidden rounded-full bg-[#EEEAE2]">

              <div
                className="h-full rounded-full bg-[#B08A4A] transition-all duration-500 ease-out"
                style={{
                  width: `${(step / totalSteps) * 100}%`,
                }}
              />

            </div>

            {/* Step indicators */}
            <div className="mt-4 hidden grid-cols-4 gap-3 sm:grid">

              {[
                'Property type',
                'Details',
                'Rental',
                'Contact',
              ].map((label, index) => {

                const stepNumber = index + 1
                const active = stepNumber === step
                const completed = stepNumber < step

                return (
                  <div
                    key={label}
                    className="flex items-center gap-2"
                  >

                    <span
                      className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-[9px] font-semibold transition-all duration-300 ${
                        completed
                          ? 'border-[#B08A4A] bg-[#B08A4A] text-white'
                          : active
                            ? 'border-[#B08A4A] bg-[#EFE8DA] text-[#8C6B3B]'
                            : 'border-[#DDD7CD] text-[#AAA49B]'
                      }`}
                    >
                      {completed ? (
                        <Check size={12} />
                      ) : (
                        stepNumber
                      )}
                    </span>

                    <span
                      className={`hidden text-[10px] lg:block ${
                        active
                          ? 'font-medium text-[#4D4841]'
                          : 'text-[#AAA49B]'
                      }`}
                    >
                      {label}
                    </span>

                  </div>
                )
              })}

            </div>

          </div>

          {/* ================= CONTENT ================= */}

          <div className="grid lg:grid-cols-[1fr_320px]">

            {/* ================= FORM AREA ================= */}

            <div className="px-5 py-8 sm:px-7 sm:py-10 md:px-10 md:py-12">

              <div className="max-w-2xl">

                <p className="text-[9px] uppercase tracking-[0.18em] text-[#A19B91] sm:text-xs sm:tracking-[0.2em]">
                  {step === 4
                    ? 'Almost there'
                    : `Step ${String(step).padStart(2, '0')}`}
                </p>

                <h3 className="mt-3 text-[21px] font-medium leading-7 tracking-[-0.03em] text-[#171717] sm:text-2xl md:mt-4 md:text-4xl">
                  {stepTitles[step - 1]}
                </h3>

                <p className="mt-3 max-w-lg text-[12px] leading-5 text-[#8A857C] sm:text-sm sm:leading-6">
                  {stepDescriptions[step - 1]}
                </p>

              </div>

              {/* ================= STEP 1 ================= */}

              {step === 1 && (
                <div className="mt-7 sm:mt-9">

                  <div className="grid gap-2.5 sm:grid-cols-2 sm:gap-3">

                    {propertyTypes.map((option) => {

                      const selected =
                        form.propertyType === option

                      return (
                        <OptionCard
                          key={option}
                          label={option}
                          selected={selected}
                          onClick={() =>
                            updateForm(
                              'propertyType',
                              option
                            )
                          }
                        />
                      )
                    })}

                  </div>

                  {errors.propertyType && (
                    <ErrorMessage>
                      {errors.propertyType}
                    </ErrorMessage>
                  )}

                  <div className="mt-7 flex items-start gap-3 rounded-[17px] border border-[#E9E3D9] bg-[#FBFAF7] p-4 sm:mt-8 sm:rounded-2xl sm:p-5">

                    <ShieldCheck
                      size={17}
                      className="mt-0.5 shrink-0 text-[#B08A4A]"
                    />

                    <p className="text-[10px] leading-5 text-[#8A857C] sm:text-xs">
                      Your information is shared directly with
                      the IConnect team for property enquiries.
                    </p>

                  </div>

                </div>
              )}

              {/* ================= STEP 2 ================= */}

              {step === 2 && (
                <div className="mt-7 space-y-5 sm:mt-9 sm:space-y-6">

                  <Field
                    label="Property location"
                    value={form.location}
                    placeholder="Example: Al Sadd, Doha"
                    icon={<MapPin size={15} />}
                    error={errors.location}
                    onChange={(value) =>
                      updateForm(
                        'location',
                        value
                      )
                    }
                  />

                  <div className="grid gap-5 sm:grid-cols-2">

                    <SelectField
                      label="Bedrooms"
                      value={form.bedrooms}
                      options={bedrooms}
                      error={errors.bedrooms}
                      onChange={(value) =>
                        updateForm(
                          'bedrooms',
                          value
                        )
                      }
                    />

                    <SelectField
                      label="Bathrooms"
                      value={form.bathrooms}
                      options={bathrooms}
                      error={errors.bathrooms}
                      onChange={(value) =>
                        updateForm(
                          'bathrooms',
                          value
                        )
                      }
                    />

                  </div>

                  <div>

                    <label className="mb-3 block text-[9px] font-medium uppercase tracking-[0.16em] text-[#918B81] sm:text-xs sm:tracking-[0.17em]">
                      Short description
                    </label>

                    <textarea
                      value={form.description}
                      onChange={(event) =>
                        updateForm(
                          'description',
                          event.target.value
                        )
                      }
                      rows={4}
                      placeholder="Tell us anything important about the property..."
                      className="w-full resize-none rounded-[17px] border border-[#E3DED5] bg-[#FBFAF7] px-4.5 py-4 text-[13px] leading-6 text-[#292622] outline-none transition-all duration-300 placeholder:text-[#AAA49B] focus:border-[#B08A4A] focus:bg-white sm:rounded-2xl sm:px-5 sm:text-sm"
                    />

                    <div className="mt-2 flex justify-between text-[9px] text-[#AAA49B] sm:text-[10px]">

                      <span>
                        Optional
                      </span>

                      <span>
                        {form.description.length}/500
                      </span>

                    </div>

                  </div>

                </div>
              )}

              {/* ================= STEP 3 ================= */}

              {step === 3 && (
                <div className="mt-7 sm:mt-9">

                  <p className="mb-3 text-[9px] uppercase tracking-[0.16em] text-[#918B81] sm:text-xs sm:tracking-[0.17em]">
                    Furnishing
                  </p>

                  <div className="grid gap-2.5 sm:grid-cols-3 sm:gap-3">

                    {furnishing.map((option) => {

                      const selected =
                        form.furnishing === option

                      return (
                        <OptionCard
                          key={option}
                          label={option}
                          selected={selected}
                          onClick={() =>
                            updateForm(
                              'furnishing',
                              option
                            )
                          }
                        />
                      )
                    })}

                  </div>

                  {errors.furnishing && (
                    <ErrorMessage>
                      {errors.furnishing}
                    </ErrorMessage>
                  )}

                  <div className="mt-7 grid gap-5 sm:mt-8 md:grid-cols-2">

                    <Field
                      label="Expected monthly rent"
                      value={form.rent}
                      placeholder="Example: QAR 4,000"
                      error={errors.rent}
                      onChange={(value) =>
                        updateForm(
                          'rent',
                          value
                        )
                      }
                    />

                    <Field
                      label="Expected deposit"
                      value={form.deposit}
                      placeholder="Example: QAR 2,000"
                      onChange={(value) =>
                        updateForm(
                          'deposit',
                          value
                        )
                      }
                    />

                  </div>

                  <div className="mt-5">

                    <Field
                      label="Available from"
                      value={form.availableFrom}
                      placeholder="Example: Immediately / 1 October"
                      onChange={(value) =>
                        updateForm(
                          'availableFrom',
                          value
                        )
                      }
                    />

                  </div>

                  <div className="mt-6 rounded-[17px] border border-[#E9E3D9] bg-[#FBFAF7] p-4 sm:mt-7 sm:rounded-2xl sm:p-5">

                    <p className="text-[10px] font-medium text-[#5A534B] sm:text-xs">
                      Rental expectations
                    </p>

                    <p className="mt-1.5 text-[10px] leading-5 text-[#99938A] sm:text-xs">
                      These details help the IConnect team
                      understand what you are looking for
                      from the listing.
                    </p>

                  </div>

                </div>
              )}

              {/* ================= STEP 4 ================= */}

              {step === 4 && (
                <div className="mt-7 space-y-5 sm:mt-9 sm:space-y-6">

                  <div className="grid gap-5 sm:grid-cols-2">

                    <Field
                      label="Your name"
                      value={form.ownerName}
                      placeholder="Full name"
                      error={errors.ownerName}
                      onChange={(value) =>
                        updateForm(
                          'ownerName',
                          value
                        )
                      }
                    />

                    <Field
                      label="WhatsApp number"
                      value={form.whatsapp}
                      placeholder="+974..."
                      type="tel"
                      error={errors.whatsapp}
                      onChange={(value) =>
                        updateForm(
                          'whatsapp',
                          value
                        )
                      }
                    />

                  </div>

                  {form.whatsapp && (
                    <div className="flex items-center gap-2 rounded-full bg-[#EFE8DA] px-4 py-2.5 text-[10px] text-[#715833] sm:text-xs">

                      <MessageCircle size={13} />

                      We will contact you through WhatsApp.

                    </div>
                  )}

                  {/* Final summary */}
                  <div className="overflow-hidden rounded-[20px] border border-[#E5DFD5] bg-[#FBFAF7]">

                    <div className="border-b border-[#E7E1D8] px-4.5 py-4 sm:px-5">

                      <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#B08A4A] sm:text-[10px]">
                        Listing summary
                      </p>

                    </div>

                    <div className="grid grid-cols-2 gap-x-5 gap-y-4 p-4.5 sm:p-5 md:grid-cols-3">

                      <SummaryItem
                        label="Type"
                        value={form.propertyType}
                      />

                      <SummaryItem
                        label="Location"
                        value={form.location}
                      />

                      <SummaryItem
                        label="Bedrooms"
                        value={form.bedrooms}
                      />

                      <SummaryItem
                        label="Bathrooms"
                        value={form.bathrooms}
                      />

                      <SummaryItem
                        label="Furnishing"
                        value={form.furnishing}
                      />

                      <SummaryItem
                        label="Rent"
                        value={form.rent}
                      />

                    </div>

                  </div>

                  <div className="rounded-[18px] border border-[#DCCFB9] bg-[#EFE8DA]/60 p-4.5 sm:p-5">

                    <div className="flex items-start gap-3">

                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#171717] text-white">

                        <MessageCircle size={14} />

                      </div>

                      <div>

                        <p className="text-[13px] font-medium text-[#292622] sm:text-sm">
                          Ready to connect?
                        </p>

                        <p className="mt-1 text-[10px] leading-5 text-[#7C7367] sm:text-xs">
                          We&apos;ll prepare these details into
                          a WhatsApp message for the IConnect team.
                        </p>

                      </div>

                    </div>

                  </div>

                </div>
              )}

              {/* ================= NAVIGATION ================= */}

              <div className="mt-7 flex items-center justify-between border-t border-[#ECE7DE] pt-5 sm:mt-9 sm:pt-6">

                <button
                  type="button"
                  onClick={previousStep}
                  disabled={step === 1}
                  className={`flex min-h-[44px] items-center gap-2 text-[13px] transition-colors sm:text-sm ${
                    step === 1
                      ? 'pointer-events-none text-[#C9C4BB]'
                      : 'text-[#777168] hover:text-[#171717]'
                  }`}
                >

                  <ArrowLeft size={16} />

                  Back

                </button>

                {step < totalSteps ? (

                  <button
                    type="button"
                    onClick={nextStep}
                    className="group flex min-h-[46px] items-center gap-2.5 rounded-full bg-[#171717] px-5 py-3 text-[13px] font-medium text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#B08A4A] sm:px-6 sm:py-3.5 sm:text-sm"
                  >

                    Continue

                    <ArrowRight
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />

                  </button>

                ) : (

                  <button
                    type="button"
                    onClick={sendToWhatsApp}
                    className="group flex min-h-[46px] items-center gap-2 rounded-full bg-[#B08A4A] px-4 py-3 text-[12px] font-medium text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#9C783E] sm:gap-3 sm:px-6 sm:py-3.5 sm:text-sm"
                  >

                    <MessageCircle size={16} />

                    <span>
                      Send on WhatsApp
                    </span>

                    <ArrowRight
                      size={15}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />

                  </button>

                )}

              </div>

            </div>

            {/* ================= PREVIEW ================= */}

            <aside className="border-t border-[#ECE7DE] bg-[#F9F7F2] px-5 py-6 sm:px-7 sm:py-7 lg:border-l lg:border-t-0 lg:p-8">

              <div className="lg:sticky lg:top-8">

                <div className="flex items-center justify-between">

                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#DCCFB9] bg-[#EFE8DA] sm:h-12 sm:w-12">

                    <Home
                      size={17}
                      strokeWidth={1.5}
                      className="text-[#8C6B3B]"
                    />

                  </div>

                  <span className="text-[9px] uppercase tracking-[0.12em] text-[#AAA49B] lg:hidden">
                    Live preview
                  </span>

                </div>

                <p className="mt-5 text-[9px] font-semibold uppercase tracking-[0.22em] text-[#B08A4A] sm:mt-6 sm:text-[10px] sm:tracking-[0.24em]">
                  Listing preview
                </p>

                <h4 className="mt-2.5 text-[18px] font-medium tracking-[-0.03em] text-[#171717] sm:mt-3 sm:text-xl">
                  {form.propertyType ||
                    'Your property'}
                </h4>

                <p className="mt-1.5 text-[13px] text-[#8A857C] sm:text-sm">
                  {form.location ||
                    'Property location'}
                </p>

                <div className="mt-6 grid grid-cols-2 gap-x-5 gap-y-4 lg:block lg:space-y-4">

                  <PreviewItem
                    label="Bedrooms"
                    value={form.bedrooms}
                  />

                  <PreviewItem
                    label="Bathrooms"
                    value={form.bathrooms}
                  />

                  <PreviewItem
                    label="Furnishing"
                    value={form.furnishing}
                  />

                  <PreviewItem
                    label="Monthly rent"
                    value={form.rent}
                  />

                  <PreviewItem
                    label="Deposit"
                    value={form.deposit}
                  />

                  <PreviewItem
                    label="Available"
                    value={form.availableFrom}
                  />

                </div>

                <div className="mt-6 border-t border-[#E5DFD5] pt-5 sm:mt-8 sm:pt-6">

                  <div className="flex items-start gap-3">

                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#171717] text-white">

                      <MessageCircle size={14} />

                    </div>

                    <div>

                      <p className="text-[13px] font-medium text-[#292622] sm:text-sm">
                        Direct contact
                      </p>

                      <p className="mt-1 text-[10px] leading-5 text-[#8A857C] sm:text-xs">
                        Your listing is sent directly to
                        the IConnect team through WhatsApp.
                      </p>

                    </div>

                  </div>

                </div>

              </div>

            </aside>

          </div>

        </div>

        {/* ================= TRUST STRIP ================= */}

        <div className="mt-8 grid gap-3 sm:mt-10 sm:gap-4 md:grid-cols-3">

          <TrustItem
            number="01"
            title="Share your details"
            description="Tell us about the property and your rental expectations."
          />

          <TrustItem
            number="02"
            title="We review"
            description="Our team receives your information directly."
          />

          <TrustItem
            number="03"
            title="Connect"
            description="We can discuss the next steps with you on WhatsApp."
          />

        </div>

      </div>

    </section>
  )
}

/* =========================================================
   OPTION CARD
========================================================= */

function OptionCard({
  label,
  selected,
  onClick,
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`group relative flex min-h-[62px] items-center justify-between rounded-[17px] border px-4.5 text-left transition-all duration-300 active:scale-[0.985] sm:min-h-[68px] sm:rounded-2xl sm:px-5 ${
        selected
          ? 'border-[#B08A4A] bg-[#EFE8DA] shadow-[0_8px_25px_rgba(176,138,74,0.10)]'
          : 'border-[#E3DED5] bg-[#FBFAF7] hover:border-[#B08A4A]/50 hover:bg-white'
      }`}
    >

      <div className="flex items-center gap-3">

        <span
          className={`h-1.5 w-1.5 rounded-full transition-all duration-300 ${
            selected
              ? 'bg-[#B08A4A]'
              : 'bg-[#D7D1C7] group-hover:bg-[#B08A4A]/50'
          }`}
        />

        <span
          className={`text-[13px] font-medium sm:text-sm ${
            selected
              ? 'text-[#5E4727]'
              : 'text-[#4D4841]'
          }`}
        >
          {label}
        </span>

      </div>

      <span
        className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
          selected
            ? 'border-[#B08A4A] bg-[#B08A4A] text-white'
            : 'border-[#D7D1C7] text-transparent'
        }`}
      >

        <Check
          size={13}
          strokeWidth={2.5}
        />

      </span>

    </button>
  )
}

/* =========================================================
   FIELD
========================================================= */

function Field({
  label,
  value,
  placeholder,
  onChange,
  error,
  type = 'text',
  icon,
}) {
  return (
    <div>

      <label className="mb-3 block text-[9px] font-medium uppercase tracking-[0.16em] text-[#918B81] sm:text-xs sm:tracking-[0.17em]">
        {label}
      </label>

      <div className="relative">

        {icon && (
          <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#AAA49B]">
            {icon}
          </span>
        )}

        <input
          type={type}
          value={value}
          onChange={(event) =>
            onChange(event.target.value)
          }
          placeholder={placeholder}
          className={`min-h-[52px] w-full rounded-[17px] border bg-[#FBFAF7] py-4 text-[13px] text-[#292622] outline-none transition-all duration-300 placeholder:text-[#AAA49B] focus:bg-white sm:rounded-2xl sm:text-sm ${
            icon
              ? 'pl-11 pr-4.5'
              : 'px-4.5'
          } ${
            error
              ? 'border-[#B08A4A]'
              : 'border-[#E3DED5] focus:border-[#B08A4A]'
          }`}
        />

      </div>

      {error && (
        <p className="mt-2 text-[10px] text-[#A56E2A] sm:text-xs">
          {error}
        </p>
      )}

    </div>
  )
}

/* =========================================================
   SELECT
========================================================= */

function SelectField({
  label,
  value,
  options,
  onChange,
  error,
}) {
  return (
    <div>

      <label className="mb-3 block text-[9px] font-medium uppercase tracking-[0.16em] text-[#918B81] sm:text-xs sm:tracking-[0.17em]">
        {label}
      </label>

      <select
        value={value}
        onChange={(event) =>
          onChange(event.target.value)
        }
        className={`min-h-[52px] w-full appearance-none rounded-[17px] border bg-[#FBFAF7] px-4.5 py-4 text-[13px] text-[#292622] outline-none transition-all duration-300 focus:border-[#B08A4A] focus:bg-white sm:rounded-2xl sm:px-5 sm:text-sm ${
          error
            ? 'border-[#B08A4A]'
            : 'border-[#E3DED5]'
        }`}
      >

        <option value="">
          Select {label.toLowerCase()}
        </option>

        {options.map((option) => (
          <option
            key={option}
            value={option}
          >
            {option}
          </option>
        ))}

      </select>

      {error && (
        <p className="mt-2 text-[10px] text-[#A56E2A] sm:text-xs">
          {error}
        </p>
      )}

    </div>
  )
}

/* =========================================================
   SUMMARY ITEM
========================================================= */

function SummaryItem({
  label,
  value,
}) {
  return (
    <div className="min-w-0">

      <p className="text-[9px] uppercase tracking-[0.12em] text-[#AAA49B]">
        {label}
      </p>

      <p className="mt-1 truncate text-[11px] font-medium text-[#4A443D] sm:text-xs">
        {value || '—'}
      </p>

    </div>
  )
}

/* =========================================================
   PREVIEW ITEM
========================================================= */

function PreviewItem({
  label,
  value,
}) {
  return (
    <div className="flex min-w-0 items-center justify-between gap-3 border-b border-[#E7E1D8] pb-3 lg:gap-4">

      <span className="text-[10px] text-[#9A948A] sm:text-xs">
        {label}
      </span>

      <span className="max-w-[105px] truncate text-right text-[10px] font-medium text-[#4A443D] sm:max-w-[150px] sm:text-xs">
        {value || '—'}
      </span>

    </div>
  )
}

/* =========================================================
   ERROR
========================================================= */

function ErrorMessage({ children }) {
  return (
    <p className="mt-3 text-[10px] text-[#A56E2A] sm:text-xs">
      {children}
    </p>
  )
}

/* =========================================================
   TRUST ITEM
========================================================= */

function TrustItem({
  number,
  title,
  description,
}) {
  return (
    <div className="rounded-[18px] border border-[#E5DFD5] bg-white/60 p-4.5 sm:rounded-2xl sm:p-5">

      <div className="flex items-center gap-2.5 sm:gap-3">

        <span className="text-[9px] font-semibold tracking-[0.18em] text-[#B08A4A] sm:text-[10px] sm:tracking-[0.2em]">
          {number}
        </span>

        <span className="h-px w-5 bg-[#D8D1C6] sm:w-6" />

        <h4 className="text-[13px] font-medium text-[#292622] sm:text-sm">
          {title}
        </h4>

      </div>

      <p className="mt-2.5 text-[11px] leading-5 text-[#8A857C] sm:mt-3 sm:text-xs">
        {description}
      </p>

    </div>
  )
}

export default ListProperty