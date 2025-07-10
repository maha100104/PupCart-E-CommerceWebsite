"use client"

import React from "react"

interface CountryCodeSelectProps {
  value: string
  onChange: (value: string) => void
}

export const CountryCodeSelect: React.FC<CountryCodeSelectProps> = ({ value, onChange }) => {
  return (
    <select
      id="countryCode"
      className="w-full border rounded px-3 py-2"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      required
    >
      <option value="+1">🇺🇸 +1 (USA)</option>
      <option value="+44">🇬🇧 +44 (UK)</option>
      <option value="+91">🇮🇳 +91 (India)</option>
      <option value="+61">🇦🇺 +61 (Australia)</option>
      <option value="+81">🇯🇵 +81 (Japan)</option>
      <option value="+49">🇩🇪 +49 (Germany)</option>
      <option value="+33">🇫🇷 +33 (France)</option>
      <option value="+39">🇮🇹 +39 (Italy)</option>
      <option value="+34">🇪🇸 +34 (Spain)</option>
      <option value="+86">🇨🇳 +86 (China)</option>
      <option value="+971">🇦🇪 +971 (UAE)</option>
      <option value="+974">🇶🇦 +974 (Qatar)</option>
      <option value="+966">🇸🇦 +966 (Saudi Arabia)</option>
      <option value="+880">🇧🇩 +880 (Bangladesh)</option>
      <option value="+92">🇵🇰 +92 (Pakistan)</option>
      <option value="+7">🇷🇺 +7 (Russia)</option>
      <option value="+20">🇪🇬 +20 (Egypt)</option>
      <option value="+27">🇿🇦 +27 (South Africa)</option>
      <option value="+82">🇰🇷 +82 (South Korea)</option>
      <option value="+63">🇵🇭 +63 (Philippines)</option>
      <option value="+60">🇲🇾 +60 (Malaysia)</option>
      <option value="+65">🇸🇬 +65 (Singapore)</option>
      <option value="+64">🇳🇿 +64 (New Zealand)</option>
      {/* ✅ Add more countries if needed */}
    </select>
  )
}