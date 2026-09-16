import { useState } from 'react'
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  MessageCircle,
  Sparkles,
  MapPin,
  Home,
} from 'lucide-react'

function FindProperty() {
  const [step, setStep] = useState(1)
  const [errors, setErrors] = useState({})

  const [form, setForm] = useState({
    propertyType: '',
    bedrooms: '',
    area: '',
    customArea: '',
    budget: '',
    furnishing: '',
    moveIn: '',
    requirements: '',
    name: '',
    whatsapp: '',
  })

  const totalSteps = 6

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
      newErrors.propertyType = 'Please select a property type.'
    }

    if (step === 2 && !form.bedrooms) {
      newErrors.bedrooms = 'Please select the required space.'
    }

    if (step === 3 && !form.area && !form.customArea.trim()) {
      newErrors.area =
        'Please select an area or enter your preferred location.'
    }

    if (step === 4 && !form.budget) {
      newErrors.budget = 'Please select your budget.'
    }

    if (step === 5 && !form.furnishing) {
      newErrors.furnishing =
        'Please select your furnishing preference.'
    }

    if (step === 6) {
      if (!form.moveIn) {
        newErrors.moveIn =
          'Please select when you plan to move.'
      }

      if (!form.name.trim()) {
        newErrors.name = 'Please enter your name.'
      }

      if (!form.whatsapp.trim()) {
        newErrors.whatsapp =
          'Please enter your WhatsApp number.'
      } else {
        const digitsOnly = form.whatsapp.replace(/\D/g, '')

        if (digitsOnly.length < 8) {
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

      window.scrollTo({
        top:
          document.getElementById('find-property')?.offsetTop ||
          0,
        behavior: 'smooth',
      })
    }
  }

  const previousStep = () => {
    if (step > 1) {
      setStep((current) => current - 1)

      window.scrollTo({
        top:
          document.getElementById('find-property')?.offsetTop ||
          0,
        behavior: 'smooth',
      })
    }
  }

  const sendToWhatsApp = () => {
  const message = `
🏠 *IConnect Property Enquiry*

Property Type: *${form.propertyType}*
Bedrooms: *${form.bedrooms}*
Location: *${form.area === 'Other' ? form.customArea : form.area}*
Budget: *${form.budget}*
Furnishing: *${form.furnishing}*
Move-in: *${form.moveIn}*

Additional Requirements:
*${form.requirements || 'None'}*

Name: *${form.name}*
WhatsApp: *${form.whatsapp}*

Thank you.
`.trim()

  const whatsappUrl = `https://api.whatsapp.com/send?phone=917306705396&text=${encodeURIComponent(
    message,
  )}`

  window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
}

  const propertyTypes = [
    'Apartment',
    'Villa',
    'Studio',
    'Room',
  ]

  const bedrooms = [
    'Studio',
    '1 BHK',
    '2 BHK',
    '3 BHK',
    '4+ BHK',
  ]

  const areas = [
    'Doha',
    'Al Wakrah',
    'Al Rayyan',
    'Abu Hamour',
    'Najma',
    'Al Sadd',
    'Old Airport',
    'Any Area',
  ]

  const budgets = [
    'Under QAR 2,000',
    'QAR 2,000 – 3,000',
    'QAR 3,000 – 5,000',
    'QAR 5,000 – 7,000',
    'QAR 7,000+',
  ]

  const furnishing = [
    'Furnished',
    'Unfurnished',
    'Any',
  ]

  const moveIn = [
    'Immediately',
    'Within 1 month',
    'Within 3 months',
    'Just exploring',
  ]

  const getCurrentValue = () => {
    if (step === 1) return form.propertyType
    if (step === 2) return form.bedrooms
    if (step === 3) return form.area
    if (step === 4) return form.budget
    if (step === 5) return form.furnishing
    return form.moveIn
  }

  const options =
    step === 1
      ? propertyTypes
      : step === 2
        ? bedrooms
        : step === 3
          ? areas
          : step === 4
            ? budgets
            : step === 5
              ? furnishing
              : moveIn

  const selectOption = (value) => {
    if (step === 1) {
      updateForm('propertyType', value)
    }

    if (step === 2) {
      updateForm('bedrooms', value)
    }

    if (step === 3) {
      updateForm('area', value)
    }

    if (step === 4) {
      updateForm('budget', value)
    }

    if (step === 5) {
      updateForm('furnishing', value)
    }

    if (step === 6) {
      updateForm('moveIn', value)
    }
  }

  const stepTitles = [
    'What kind of place are you looking for?',
    'How much space do you need?',
    'Where would you like to live?',
    'What monthly budget feels right?',
    'What furnishing do you prefer?',
    'When would you like to move?',
  ]

  const progress = Math.round(
    (step / totalSteps) * 100
  )

  return (
    <section
      id="find-property"
      className="relative overflow-hidden bg-[#F7F5F0] px-5 py-20 sm:px-6 md:px-10 md:py-28 lg:px-14 lg:py-32"
    >
      {/* Soft decorative background */}

      <div className="pointer-events-none absolute -right-40 top-20 h-[420px] w-[420px] rounded-full border border-[#B08A4A]/10" />

      <div className="pointer-events-none absolute -left-48 bottom-20 h-[500px] w-[500px] rounded-full border border-[#B08A4A]/10" />

      <div className="pointer-events-none absolute right-[15%] top-32 h-1.5 w-1.5 rounded-full bg-[#B08A4A]" />

      <div className="relative mx-auto max-w-[1240px]">

        {/* =====================================
            SECTION INTRO
            ===================================== */}

        <div className="mx-auto max-w-4xl text-center">

          <div className="inline-flex items-center gap-2.5 rounded-full border border-[#D8D0C3] bg-white px-4 py-2 shadow-[0_8px_30px_rgba(23,23,23,0.04)]">

            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#B08A4A]/10">
              <Sparkles
                size={12}
                className="text-[#B08A4A]"
              />
            </span>

            <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#7A746A] sm:text-[10px]">
              Find your next place
            </span>

          </div>

          <h2 className="mt-6 text-[2.65rem] font-medium leading-[0.95] tracking-[-0.055em] text-[#171717] sm:text-5xl md:text-6xl lg:text-7xl">

            Find a place that feels
            <span className="block font-serif italic text-[#B08A4A]">
              right.
            </span>

          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-[14px] leading-6 text-[#777168] sm:text-base sm:leading-7 md:mt-6 md:text-lg">

            Tell us what you need. We&apos;ll help connect you
            with suitable apartments, villas, studios and rooms
            across Qatar.

          </p>

        </div>

        {/* =====================================
            TRUST / PROCESS
            ===================================== */}

        <div className="mx-auto mt-8 flex max-w-2xl flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[9px] font-medium uppercase tracking-[0.16em] text-[#928B80] sm:gap-x-8 sm:text-[10px]">

          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#B08A4A]" />
            Tell us
          </span>

          <span className="hidden h-px w-7 bg-[#D7D0C5] sm:block" />

          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#B08A4A]" />
            We match
          </span>

          <span className="hidden h-px w-7 bg-[#D7D0C5] sm:block" />

          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#B08A4A]" />
            WhatsApp
          </span>

        </div>

        {/* =====================================
            FORM CARD
            ===================================== */}

        <div className="mt-10 overflow-hidden rounded-[26px] border border-[#DED8CE] bg-white shadow-[0_25px_80px_rgba(23,23,23,0.07)] sm:mt-14 sm:rounded-[32px] md:mt-16">

          {/* Progress header */}

          <div className="border-b border-[#ECE7DF] px-5 py-5 sm:px-8 sm:py-6 md:px-10">

            <div className="flex items-center justify-between">

              <div className="flex items-center gap-3">

                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#171717] text-[9px] font-semibold text-white">
                  {String(step).padStart(2, '0')}
                </div>

                <div>

                  <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#B08A4A] sm:text-[10px]">
                    Your search
                  </p>

                  <p className="mt-0.5 text-[10px] text-[#A19A90] sm:text-xs">
                    Step {step} of {totalSteps}
                  </p>

                </div>

              </div>

              <span className="text-xs font-medium text-[#777168]">
                {progress}%
              </span>

            </div>

            <div className="mt-4 h-1 overflow-hidden rounded-full bg-[#EEEAE3]">

              <div
                className="h-full rounded-full bg-[#B08A4A] transition-all duration-500"
                style={{
                  width: `${progress}%`,
                }}
              />

            </div>

          </div>

          {/* =====================================
              FORM + SUMMARY
              ===================================== */}

          <div className="grid lg:grid-cols-[1fr_300px]">

            {/* FORM */}

            <div className="px-5 py-8 sm:px-8 sm:py-10 md:px-10 md:py-12 lg:px-12">

              <div className="max-w-2xl">

                <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#B08A4A] sm:text-[10px]">
                  {step === 6
                    ? 'Almost there'
                    : 'Tell us your preference'}
                </p>

                <h3 className="mt-3 text-[22px] font-medium leading-[1.15] tracking-[-0.04em] text-[#171717] sm:text-2xl md:text-4xl md:leading-[1.1]">
                  {stepTitles[step - 1]}
                </h3>

              </div>

              {/* =====================================
                  OPTIONS
                  ===================================== */}

              <div
                className={`mt-7 grid gap-2.5 sm:mt-9 sm:gap-3 ${
                  options.length >= 5
                    ? 'sm:grid-cols-2'
                    : 'sm:grid-cols-2'
                }`}
              >

                {options.map((option, index) => {

                  const selected =
                    getCurrentValue() === option

                  return (
                    <button
                      key={option}
                      type="button"
                      onClick={() =>
                        selectOption(option)
                      }
                      className={`group relative flex min-h-[62px] items-center justify-between rounded-[17px] border px-4.5 text-left transition-all duration-300 sm:min-h-[68px] sm:rounded-2xl sm:px-5 ${
                        selected
                          ? 'border-[#B08A4A] bg-[#B08A4A]/[0.07] shadow-[0_8px_25px_rgba(176,138,74,0.08)]'
                          : 'border-[#E4DED4] bg-[#FCFBF9] hover:border-[#CFC4B4] hover:bg-white hover:shadow-[0_8px_25px_rgba(23,23,23,0.04)]'
                      }`}
                    >

                      <div className="flex min-w-0 items-center gap-3">

                        <span
                          className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border text-[9px] font-medium transition-all duration-300 ${
                            selected
                              ? 'border-[#B08A4A] bg-[#B08A4A] text-white'
                              : 'border-[#DED8CE] bg-white text-[#AAA39A]'
                          }`}
                        >
                          {String(index + 1).padStart(2, '0')}
                        </span>

                        <span
                          className={`text-[13px] transition-colors sm:text-sm ${
                            selected
                              ? 'font-medium text-[#171717]'
                              : 'text-[#59554F]'
                          }`}
                        >
                          {option}
                        </span>

                      </div>

                      <span
                        className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                          selected
                            ? 'border-[#B08A4A] bg-[#B08A4A] text-white'
                            : 'border-[#DDD7CE] bg-white text-transparent'
                        }`}
                      >
                        <Check
                          size={13}
                          strokeWidth={2.5}
                        />
                      </span>

                    </button>
                  )
                })}

              </div>

              {/* =====================================
                  STEP ERRORS
                  ===================================== */}

              {step === 1 && errors.propertyType && (
                <ErrorMessage
                  message={errors.propertyType}
                />
              )}

              {step === 2 && errors.bedrooms && (
                <ErrorMessage
                  message={errors.bedrooms}
                />
              )}

              {step === 4 && errors.budget && (
                <ErrorMessage
                  message={errors.budget}
                />
              )}

              {step === 5 && errors.furnishing && (
                <ErrorMessage
                  message={errors.furnishing}
                />
              )}

              {step === 6 && errors.moveIn && (
                <ErrorMessage
                  message={errors.moveIn}
                />
              )}

              {/* =====================================
                  CUSTOM LOCATION
                  ===================================== */}

              {step === 3 && (
                <div className="mt-7 rounded-[20px] border border-[#E8E2D9] bg-[#FCFBF8] p-4 sm:mt-8 sm:p-5">

                  <div className="flex items-center gap-3">

                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#B08A4A]/10">
                      <MapPin
                        size={15}
                        className="text-[#B08A4A]"
                      />
                    </div>

                    <div>

                      <label
                        htmlFor="custom-area"
                        className="block text-[10px] font-semibold uppercase tracking-[0.15em] text-[#5F5A53] sm:text-xs"
                      >
                        Looking for a specific area?
                      </label>

                      <p className="mt-1 text-[10px] text-[#A29B91]">
                        Enter any location in Qatar
                      </p>

                    </div>

                    {form.customArea && (
                      <button
                        type="button"
                        onClick={() =>
                          updateForm(
                            'customArea',
                            ''
                          )
                        }
                        className="ml-auto text-[9px] font-medium uppercase tracking-[0.12em] text-[#9A9287] transition-colors hover:text-[#B08A4A]"
                      >
                        Clear
                      </button>
                    )}

                  </div>

                  <div className="relative mt-4">

                    <input
                      id="custom-area"
                      type="text"
                      value={form.customArea}
                      onChange={(event) =>
                        updateForm(
                          'customArea',
                          event.target.value
                        )
                      }
                      placeholder="Lusail, The Pearl, West Bay..."
                      className={`w-full rounded-[15px] border bg-white px-4 py-4 pr-12 text-[13px] text-[#171717] outline-none transition-all duration-300 placeholder:text-[#B4ADA3] focus:border-[#B08A4A] focus:ring-4 focus:ring-[#B08A4A]/[0.08] sm:text-sm ${
                        errors.area
                          ? 'border-[#B08A4A]'
                          : 'border-[#E1DBD1]'
                      }`}
                    />

                    {form.customArea && (
                      <div className="absolute right-4 top-1/2 flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full bg-[#B08A4A] text-white">
                        <Check
                          size={13}
                          strokeWidth={2.5}
                        />
                      </div>
                    )}

                  </div>

                  {errors.area && (
                    <p className="mt-2 text-xs text-[#B08A4A]">
                      {errors.area}
                    </p>
                  )}

                </div>
              )}

              {/* =====================================
                  FINAL STEP
                  ===================================== */}

              {step === 6 && (
                <div className="mt-7 space-y-5 sm:mt-8">

                  {/* Additional requirements */}

                  <div>

                    <label className="mb-3 block text-[10px] font-semibold uppercase tracking-[0.15em] text-[#68625A] sm:text-xs">
                      Anything else we should know?
                    </label>

                    <textarea
                      value={form.requirements}
                      onChange={(event) =>
                        updateForm(
                          'requirements',
                          event.target.value
                        )
                      }
                      placeholder="Near metro, parking, balcony, family building..."
                      rows={4}
                      className="w-full resize-none rounded-[17px] border border-[#E1DBD1] bg-[#FCFBF9] px-4 py-4 text-[13px] text-[#171717] outline-none transition-all placeholder:text-[#B2ABA1] focus:border-[#B08A4A] focus:bg-white focus:ring-4 focus:ring-[#B08A4A]/[0.07] sm:px-5 sm:text-sm"
                    />

                  </div>

                  {/* Customer details */}

                  <div className="grid gap-5 sm:grid-cols-2">

                    <div>

                      <label className="mb-3 block text-[10px] font-semibold uppercase tracking-[0.15em] text-[#68625A] sm:text-xs">
                        Your name
                      </label>

                      <input
                        type="text"
                        value={form.name}
                        onChange={(event) =>
                          updateForm(
                            'name',
                            event.target.value
                          )
                        }
                        placeholder="Your name"
                        className={`w-full rounded-[17px] border bg-[#FCFBF9] px-4 py-4 text-[13px] text-[#171717] outline-none transition-all placeholder:text-[#B2ABA1] focus:border-[#B08A4A] focus:bg-white focus:ring-4 focus:ring-[#B08A4A]/[0.07] sm:px-5 sm:text-sm ${
                          errors.name
                            ? 'border-[#B08A4A]'
                            : 'border-[#E1DBD1]'
                        }`}
                      />

                      {errors.name && (
                        <p className="mt-2 text-xs text-[#B08A4A]">
                          {errors.name}
                        </p>
                      )}

                    </div>

                    <div>

                      <label className="mb-3 block text-[10px] font-semibold uppercase tracking-[0.15em] text-[#68625A] sm:text-xs">
                        WhatsApp number
                      </label>

                      <input
                        type="tel"
                        value={form.whatsapp}
                        onChange={(event) =>
                          updateForm(
                            'whatsapp',
                            event.target.value
                          )
                        }
                        placeholder="+974..."
                        className={`w-full rounded-[17px] border bg-[#FCFBF9] px-4 py-4 text-[13px] text-[#171717] outline-none transition-all placeholder:text-[#B2ABA1] focus:border-[#B08A4A] focus:bg-white focus:ring-4 focus:ring-[#B08A4A]/[0.07] sm:px-5 sm:text-sm ${
                          errors.whatsapp
                            ? 'border-[#B08A4A]'
                            : 'border-[#E1DBD1]'
                        }`}
                      />

                      {errors.whatsapp && (
                        <p className="mt-2 text-xs text-[#B08A4A]">
                          {errors.whatsapp}
                        </p>
                      )}

                    </div>

                  </div>

                </div>
              )}

              {/* =====================================
                  NAVIGATION
                  ===================================== */}

              <div className="mt-8 flex items-center justify-between border-t border-[#ECE7DF] pt-5 sm:mt-10 sm:pt-6">

                <button
                  type="button"
                  onClick={previousStep}
                  disabled={step === 1}
                  className={`flex min-h-[44px] items-center gap-2 text-[13px] transition-colors sm:text-sm ${
                    step === 1
                      ? 'pointer-events-none text-[#C9C3B9]'
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
                    className="group flex min-h-[48px] items-center gap-2.5 rounded-full bg-[#171717] px-5 py-3 text-[13px] font-medium text-white shadow-[0_10px_25px_rgba(23,23,23,0.12)] transition-all duration-300 hover:bg-[#B08A4A] sm:px-6 sm:py-3.5 sm:text-sm"
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
                    className="group flex min-h-[48px] items-center gap-2 rounded-full bg-[#B08A4A] px-4.5 py-3 text-[12px] font-medium text-white shadow-[0_10px_25px_rgba(176,138,74,0.18)] transition-all duration-300 hover:bg-[#9E793F] sm:gap-3 sm:px-6 sm:py-3.5 sm:text-sm"
                  >

                    <MessageCircle size={16} />

                    <span>
                      Send on WhatsApp
                    </span>

                    <ArrowUpRight
                      size={15}
                      className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />

                  </button>

                )}

              </div>

            </div>

            {/* =====================================
                SEARCH SUMMARY
                ===================================== */}

            <aside className="border-t border-[#ECE7DF] bg-[#FBFAF7] px-5 py-6 sm:px-8 sm:py-7 lg:border-l lg:border-t-0 lg:p-8">

              <div className="lg:sticky lg:top-8">

                <div className="flex items-center gap-3">

                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#171717] text-white">
                    <Home size={15} />
                  </div>

                  <div>

                    <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#B08A4A] sm:text-[10px]">
                      Your search
                    </p>

                    <p className="mt-0.5 text-[10px] text-[#989187] sm:text-xs">
                      Live preference summary
                    </p>

                  </div>

                </div>

                <div className="mt-6 grid grid-cols-2 gap-x-5 gap-y-4 lg:block lg:space-y-4">

                  <SummaryItem
                    label="Type"
                    value={form.propertyType}
                  />

                  <SummaryItem
                    label="Bedrooms"
                    value={form.bedrooms}
                  />

                  <SummaryItem
                    label="Area"
                    value={
                      form.customArea ||
                      form.area
                    }
                  />

                  <SummaryItem
                    label="Budget"
                    value={form.budget}
                  />

                  <SummaryItem
                    label="Furnishing"
                    value={form.furnishing}
                  />

                  <SummaryItem
                    label="Move-in"
                    value={form.moveIn}
                  />

                </div>

                <div className="mt-6 rounded-[18px] border border-[#E4DED4] bg-white p-4 sm:mt-8 sm:p-5">

                  <div className="flex items-start gap-3">

                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#B08A4A]/10">
                      <MessageCircle
                        size={15}
                        className="text-[#B08A4A]"
                      />
                    </div>

                    <div>

                      <p className="text-[12px] font-medium text-[#292622] sm:text-sm">
                        Direct WhatsApp
                      </p>

                      <p className="mt-1 text-[10px] leading-5 text-[#918A80] sm:text-xs">
                        Your preferences will be sent
                        directly to the IConnect team.
                      </p>

                    </div>

                  </div>

                </div>

              </div>

            </aside>

          </div>

        </div>

        {/* =====================================
            BOTTOM TRUST MESSAGE
            ===================================== */}

        <div className="mx-auto mt-7 flex max-w-2xl items-center justify-center gap-2 text-center text-[9px] uppercase tracking-[0.14em] text-[#9A9287] sm:mt-9 sm:text-[10px]">

          <Check
            size={12}
            className="text-[#B08A4A]"
          />

          No account required

          <span className="text-[#D1CAC0]">•</span>

          Free property search

          <span className="text-[#D1CAC0]">•</span>

          WhatsApp support

        </div>

      </div>
    </section>
  )
}

function ErrorMessage({ message }) {
  return (
    <p className="mt-3 text-xs text-[#B08A4A]">
      {message}
    </p>
  )
}

function SummaryItem({ label, value }) {
  return (
    <div className="flex min-w-0 items-center justify-between gap-2 border-b border-[#EEE9E1] pb-3 lg:gap-4">

      <span className="text-[10px] text-[#9A9287] sm:text-xs">
        {label}
      </span>

      <span className="max-w-[125px] truncate text-right text-[10px] font-medium text-[#403C36] sm:max-w-[150px] sm:text-xs">
        {value || '—'}
      </span>

    </div>
  )
}

export default FindProperty