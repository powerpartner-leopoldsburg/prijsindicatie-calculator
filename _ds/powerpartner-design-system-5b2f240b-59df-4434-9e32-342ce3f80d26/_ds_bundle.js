/* @ds-bundle: {"format":3,"namespace":"PowerpartnerDesignSystem_5b2f24","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Stat","sourcePath":"components/marketing/Stat.jsx"},{"name":"Testimonial","sourcePath":"components/marketing/Testimonial.jsx"},{"name":"TrustBar","sourcePath":"components/marketing/TrustBar.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"f473b9568932","components/core/Button.jsx":"9daab8035e77","components/core/Card.jsx":"d92c4a13d73e","components/forms/Checkbox.jsx":"96a35d6d7e1c","components/forms/Input.jsx":"d9007cd0c4a8","components/marketing/Stat.jsx":"d5c97b082ab3","components/marketing/Testimonial.jsx":"453abd0e90b0","components/marketing/TrustBar.jsx":"5eec172373ac","ui_kits/landing/Hero.jsx":"7c2e21ba3573","ui_kits/landing/Sections.jsx":"e5c710586ed0","ui_kits/landing/SiteFooter.jsx":"b54817b54ba8","ui_kits/landing/SiteHeader.jsx":"9e7f69c3210e","ui_kits/landing/Survey.jsx":"8f86286c7421"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.PowerpartnerDesignSystem_5b2f24 = window.PowerpartnerDesignSystem_5b2f24 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Powerpartner badge / pill label. Use for trust signals, emphasis, status.
 * tones: green, yellow, dark, neutral, soft-green.
 */
function Badge({
  children,
  tone = 'green',
  size = 'md',
  icon = null,
  style = {},
  ...rest
}) {
  const tones = {
    green: {
      background: 'var(--pp-green)',
      color: 'var(--pp-white)'
    },
    yellow: {
      background: 'var(--pp-yellow)',
      color: 'var(--pp-dark)'
    },
    dark: {
      background: 'var(--pp-dark)',
      color: 'var(--pp-white)'
    },
    neutral: {
      background: 'var(--pp-neutral-150)',
      color: 'var(--pp-neutral-700)'
    },
    'soft-green': {
      background: 'var(--pp-green-soft)',
      color: 'var(--pp-green-press)'
    }
  };
  const sizes = {
    sm: {
      padding: '3px 10px',
      fontSize: '0.6875rem'
    },
    md: {
      padding: '5px 14px',
      fontSize: '0.75rem'
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      fontFamily: 'var(--font-family-base)',
      fontWeight: 700,
      letterSpacing: '0.02em',
      borderRadius: 'var(--radius-pill)',
      lineHeight: 1,
      whiteSpace: 'nowrap',
      ...sizes[size],
      ...tones[tone],
      ...style
    }
  }, rest), icon, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Powerpartner primary button. Green CTA by default, white text, Montserrat Bold.
 * Variants: primary (green), secondary (yellow), dark, ghost, outline.
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  iconLeft = null,
  iconRight = null,
  type = 'button',
  onClick,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      padding: '8px 16px',
      fontSize: '0.875rem'
    },
    md: {
      padding: '12px 24px',
      fontSize: '1rem'
    },
    lg: {
      padding: '16px 32px',
      fontSize: '1.125rem'
    }
  };
  const variants = {
    primary: {
      background: 'var(--pp-green)',
      color: 'var(--pp-white)',
      border: '2px solid transparent'
    },
    secondary: {
      background: 'var(--pp-yellow)',
      color: 'var(--pp-dark)',
      border: '2px solid transparent'
    },
    dark: {
      background: 'var(--pp-dark)',
      color: 'var(--pp-white)',
      border: '2px solid transparent'
    },
    outline: {
      background: 'transparent',
      color: 'var(--pp-dark)',
      border: '2px solid var(--pp-neutral-300)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--pp-green)',
      border: '2px solid transparent'
    }
  };
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    fontFamily: 'var(--font-family-base)',
    fontWeight: 700,
    lineHeight: 1,
    borderRadius: 'var(--radius-md)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    width: fullWidth ? '100%' : 'auto',
    transition: 'background var(--transition-base), border-color var(--transition-base), transform var(--transition-fast)',
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    ...sizes[size],
    ...variants[variant],
    ...style
  };
  const hoverMap = {
    primary: 'var(--pp-green-hover)',
    secondary: 'var(--pp-yellow-hover)',
    dark: 'var(--pp-neutral-800)'
  };
  const handleOver = e => {
    if (disabled) return;
    if (hoverMap[variant]) e.currentTarget.style.background = hoverMap[variant];
    if (variant === 'outline') e.currentTarget.style.borderColor = 'var(--pp-green)';
    if (variant === 'ghost') e.currentTarget.style.background = 'var(--pp-green-soft)';
  };
  const handleOut = e => {
    if (disabled) return;
    e.currentTarget.style.background = variants[variant].background;
    if (variant === 'outline') e.currentTarget.style.borderColor = 'var(--pp-neutral-300)';
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    style: base,
    onMouseOver: handleOver,
    onMouseOut: handleOut,
    onMouseDown: e => {
      if (!disabled) e.currentTarget.style.transform = 'translateY(1px)';
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = 'translateY(0)';
    }
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Powerpartner content card. White surface, subtle border, optional hover lift.
 * Use for feature blocks, steps, testimonials, pricing.
 */
function Card({
  children,
  padding = 'lg',
  interactive = false,
  accent = false,
  style = {},
  ...rest
}) {
  const pads = {
    sm: 'var(--space-4)',
    md: 'var(--space-5)',
    lg: 'var(--space-6)'
  };
  const base = {
    background: 'var(--surface-card)',
    border: '1px solid var(--border-default)',
    borderRadius: 'var(--radius-lg)',
    borderTop: accent ? '4px solid var(--pp-green)' : '1px solid var(--border-default)',
    padding: pads[padding] || pads.lg,
    transition: 'box-shadow var(--transition-base), transform var(--transition-base)',
    boxSizing: 'border-box',
    ...style
  };
  const over = e => {
    if (!interactive) return;
    e.currentTarget.style.boxShadow = 'var(--shadow-md)';
    e.currentTarget.style.transform = 'translateY(-2px)';
  };
  const out = e => {
    if (!interactive) return;
    e.currentTarget.style.boxShadow = 'none';
    e.currentTarget.style.transform = 'translateY(0)';
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: base,
    onMouseOver: over,
    onMouseOut: out
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Powerpartner checkbox with label. Green when checked.
 */
function Checkbox({
  label,
  checked,
  defaultChecked,
  onChange,
  disabled = false,
  id,
  style = {},
  ...rest
}) {
  const inputId = id || (label ? 'cb-' + label.toLowerCase().replace(/\s+/g, '-') : undefined);
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      fontFamily: 'var(--font-family-base)',
      fontSize: '1rem',
      color: 'var(--text-primary)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    type: "checkbox",
    checked: checked,
    defaultChecked: defaultChecked,
    onChange: onChange,
    disabled: disabled,
    style: {
      width: '20px',
      height: '20px',
      accentColor: 'var(--pp-green)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      margin: 0
    }
  }, rest)), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Powerpartner text input with optional label and helper/error text.
 */
function Input({
  label,
  id,
  type = 'text',
  placeholder = '',
  value,
  defaultValue,
  onChange,
  helperText = '',
  error = false,
  required = false,
  disabled = false,
  style = {},
  ...rest
}) {
  const [focused, setFocused] = React.useState(false);
  const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);
  const borderColor = error ? '#b23b3b' : focused ? 'var(--pp-green)' : 'var(--border-strong)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
      fontFamily: 'var(--font-family-base)',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontSize: '0.875rem',
      fontWeight: 600,
      color: 'var(--text-primary)'
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--pp-green)'
    }
  }, " *")), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    type: type,
    placeholder: placeholder,
    value: value,
    defaultValue: defaultValue,
    onChange: onChange,
    disabled: disabled,
    required: required,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
      fontFamily: 'var(--font-family-base)',
      fontSize: '1rem',
      color: 'var(--text-primary)',
      padding: '12px 14px',
      background: disabled ? 'var(--pp-neutral-100)' : 'var(--pp-white)',
      border: `2px solid ${borderColor}`,
      borderRadius: 'var(--radius-md)',
      outline: 'none',
      boxShadow: focused && !error ? 'var(--shadow-focus)' : 'none',
      transition: 'border-color var(--transition-fast), box-shadow var(--transition-fast)',
      boxSizing: 'border-box',
      width: '100%'
    }
  }, rest)), helperText && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.8125rem',
      color: error ? '#b23b3b' : 'var(--text-muted)'
    }
  }, helperText));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/marketing/Stat.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Powerpartner stat / KPI block — big number + label. Used for social proof & savings.
 */
function Stat({
  value,
  label,
  tone = 'green',
  align = 'left',
  style = {},
  ...rest
}) {
  const colors = {
    green: 'var(--pp-green)',
    yellow: 'var(--pp-yellow)',
    dark: 'var(--pp-dark)',
    white: 'var(--pp-white)'
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '4px',
      textAlign: align,
      fontFamily: 'var(--font-family-base)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '2.75rem',
      fontWeight: 800,
      lineHeight: 1,
      color: colors[tone],
      letterSpacing: '-0.02em'
    }
  }, value), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.9375rem',
      fontWeight: 500,
      color: tone === 'white' ? 'rgba(255,255,255,0.75)' : 'var(--text-secondary)'
    }
  }, label));
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/Stat.jsx", error: String((e && e.message) || e) }); }

// components/marketing/Testimonial.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Powerpartner testimonial card — quote + 5-star rating + customer name/place.
 */
function Testimonial({
  quote,
  name,
  place,
  rating = 5,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("figure", _extends({
    style: {
      margin: 0,
      background: 'var(--surface-card)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-lg)',
      padding: 'var(--space-6)',
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      fontFamily: 'var(--font-family-base)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    "aria-label": rating + ' van 5 sterren',
    style: {
      color: 'var(--pp-yellow)',
      fontSize: '1.125rem',
      letterSpacing: '2px'
    }
  }, '★'.repeat(rating), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--pp-neutral-200)'
    }
  }, '★'.repeat(5 - rating))), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      fontSize: '1.125rem',
      lineHeight: 1.55,
      color: 'var(--text-primary)'
    }
  }, "\u201C", quote, "\u201D"), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      marginTop: 'auto'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: '36px',
      height: '36px',
      borderRadius: '50%',
      background: 'var(--pp-green-soft)',
      color: 'var(--pp-green-press)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 700,
      fontSize: '0.875rem'
    }
  }, name ? name.charAt(0) : '★'), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.9375rem'
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      display: 'block',
      color: 'var(--text-primary)'
    }
  }, name), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)'
    }
  }, place))));
}
Object.assign(__ds_scope, { Testimonial });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/Testimonial.jsx", error: String((e && e.message) || e) }); }

// components/marketing/TrustBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Powerpartner trust bar — the standard social-proof row.
 * "1550+ klanten · 9+ jaar · ★★★★★ · Gratis advies aan huis"
 */
function TrustBar({
  items,
  tone = 'light',
  style = {},
  ...rest
}) {
  const defaults = ['1550+ tevreden klanten', '9+ jaar ervaring', '★★★★★ Google Reviews', 'Gratis advies aan huis'];
  const list = items && items.length ? items : defaults;
  const dark = tone === 'dark';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      gap: '12px 20px',
      fontFamily: 'var(--font-family-base)',
      fontSize: '0.9375rem',
      fontWeight: 600,
      color: dark ? 'var(--pp-white)' : 'var(--text-primary)',
      ...style
    }
  }, rest), list.map((item, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, i > 0 && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": true,
    style: {
      color: 'var(--pp-green)',
      fontWeight: 700
    }
  }, "\xB7"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px'
    }
  }, item))));
}
Object.assign(__ds_scope, { TrustBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/TrustBar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/Hero.jsx
try { (() => {
/* global React */
// Hero — product-matched H1 + sub + single CTA above the fold, with trust bar.
function Hero({
  onCta
}) {
  const {
    Button,
    Badge,
    TrustBar
  } = window.PowerpartnerDesignSystem_5b2f24;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--pp-white)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '72px 24px 56px',
      display: 'grid',
      gridTemplateColumns: '1.05fr 0.95fr',
      gap: 56,
      alignItems: 'center'
    },
    className: "pp-hero-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Badge, {
    tone: "soft-green",
    style: {
      marginBottom: 20
    }
  }, "Voor wie al zonnepanelen heeft"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-family-base)',
      fontWeight: 700,
      fontSize: 'var(--font-size-display)',
      lineHeight: 1.05,
      letterSpacing: '-0.02em',
      color: 'var(--text-primary)',
      margin: '0 0 20px'
    }
  }, "Haal eindelijk alles uit je zonnepanelen"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-family-base)',
      fontSize: 'var(--font-size-lg)',
      lineHeight: 1.5,
      color: 'var(--text-secondary)',
      margin: '0 0 28px',
      maxWidth: 520
    }
  }, "Een thuisbatterij verhoogt je zelfverbruik van 28% naar 75%. Yanco legt je precies uit wat dat voor jou betekent \u2014 gratis en vrijblijvend bij je thuis."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      flexWrap: 'wrap',
      marginBottom: 26
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: onCta,
    iconRight: /*#__PURE__*/React.createElement("span", null, "\u2192")
  }, "Plan je gratis adviesgesprek"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "outline",
    onClick: onCta
  }, "Bereken je besparing")), /*#__PURE__*/React.createElement(TrustBar, {
    items: ['1550+ tevreden klanten', '9+ jaar ervaring', '★★★★★ Google']
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      borderRadius: 'var(--radius-xl)',
      overflow: 'hidden',
      background: 'var(--pp-gradient-dark)',
      minHeight: 420,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      padding: 28
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'rgba(255,255,255,0.18)',
      fontSize: 13,
      fontWeight: 600,
      letterSpacing: '0.08em',
      textTransform: 'uppercase'
    }
  }, "[ Foto: installatie thuisbatterij ]"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      background: 'var(--pp-white)',
      borderRadius: 'var(--radius-lg)',
      padding: 20,
      boxShadow: 'var(--shadow-lg)',
      maxWidth: 280
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--text-muted)',
      marginBottom: 4
    }
  }, "Geschatte besparing"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 34,
      fontWeight: 800,
      color: 'var(--pp-green)',
      lineHeight: 1
    }
  }, "\u20AC800\u20131200"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--text-secondary)',
      marginTop: 4
    }
  }, "per jaar met thuisbatterij")))));
}
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/Sections.jsx
try { (() => {
/* global React */
// Pain point + How it works + Testimonials sections.
function PainBlock() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--pp-gray-light)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-narrow)',
      margin: '0 auto',
      padding: '80px 24px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-family-base)',
      fontSize: 'var(--font-size-xs)',
      fontWeight: 700,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--pp-green)',
      margin: '0 0 14px'
    }
  }, "Herkenbaar?"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-family-base)',
      fontWeight: 700,
      fontSize: 'var(--font-size-h2)',
      lineHeight: 1.15,
      color: 'var(--text-primary)',
      margin: '0 0 18px',
      textWrap: 'balance'
    }
  }, "Slechts 28% van je zonnestroom gebruik je zelf. De rest? Weg naar het net."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-family-base)',
      fontSize: 'var(--font-size-lg)',
      lineHeight: 1.6,
      color: 'var(--text-secondary)',
      margin: 0
    }
  }, "Sinds de digitale meter draait je teller niet meer terug en bestraft het capaciteitstarief je piekverbruik. Een thuisbatterij slaat je overschot op zodat je het 's avonds zelf gebruikt \u2014 en je piek daalt van 4,5 naar 2,5 kW.")));
}
function HowItWorks() {
  const {
    Card,
    Badge
  } = window.PowerpartnerDesignSystem_5b2f24;
  const steps = [{
    n: '1',
    t: 'Gratis adviesgesprek',
    d: 'Yanco komt bij je thuis langs, bekijkt je situatie en berekent je besparing — zonder verplichtingen.'
  }, {
    n: '2',
    t: 'Advies op maat',
    d: 'Je krijgt een helder voorstel met de juiste batterij voor jouw verbruik en dak. Geen jargon, gewoon eerlijk.'
  }, {
    n: '3',
    t: 'Vakkundige installatie',
    d: 'Ons eigen team installeert alles netjes. Daarna haal je écht alles uit je zonnepanelen.'
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--pp-white)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '80px 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginBottom: 44
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-family-base)',
      fontWeight: 700,
      fontSize: 'var(--font-size-h2)',
      color: 'var(--text-primary)',
      margin: '0 0 10px'
    }
  }, "Zo werkt het"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-family-base)',
      fontSize: 'var(--font-size-lg)',
      color: 'var(--text-secondary)',
      margin: 0
    }
  }, "In drie eenvoudige stappen naar lagere energiekosten.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 24
    },
    className: "pp-steps-grid"
  }, steps.map(s => /*#__PURE__*/React.createElement(Card, {
    key: s.n,
    accent: true,
    padding: "lg"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 44,
      height: 44,
      borderRadius: 'var(--radius-md)',
      background: 'var(--pp-green-soft)',
      color: 'var(--pp-green-press)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 800,
      fontSize: 20,
      marginBottom: 16
    }
  }, s.n), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-family-base)',
      fontWeight: 700,
      fontSize: 'var(--font-size-h4)',
      margin: '0 0 8px',
      color: 'var(--text-primary)'
    }
  }, s.t), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-family-base)',
      fontSize: 15,
      lineHeight: 1.6,
      color: 'var(--text-secondary)',
      margin: 0
    }
  }, s.d))))));
}
function Testimonials() {
  const {
    Testimonial,
    Stat
  } = window.PowerpartnerDesignSystem_5b2f24;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--pp-dark)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '80px 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 56,
      marginBottom: 48,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    value: "1550+",
    label: "tevreden klanten",
    tone: "white"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "28% \u2192 75%",
    label: "meer eigenverbruik",
    tone: "green"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "5\u20137 jaar",
    label: "terugverdientijd",
    tone: "white"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: 24
    },
    className: "pp-testi-grid"
  }, /*#__PURE__*/React.createElement(Testimonial, {
    rating: 5,
    quote: "Yanco kwam langs, legde alles rustig uit en de besparing klopt echt. Geen verkooppraatjes.",
    name: "Marc D.",
    place: "Hechtel-Eksel"
  }), /*#__PURE__*/React.createElement(Testimonial, {
    rating: 5,
    quote: "Eindelijk een installateur die gewoon eerlijk zegt wat kan. Mijn capaciteitspiek is flink gedaald.",
    name: "Linda V.",
    place: "Lommel"
  }))));
}
window.PainBlock = PainBlock;
window.HowItWorks = HowItWorks;
window.Testimonials = Testimonials;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/Sections.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/SiteFooter.jsx
try { (() => {
/* global React */
// Minimal footer — single brand mark + contact, no navigation (conversion-focused).
function SiteFooter() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--pp-dark)',
      color: 'rgba(255,255,255,0.7)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '36px 24px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-wordmark-white.png",
    alt: "Powerpartner",
    style: {
      height: 28
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-family-base)',
      fontSize: 14
    }
  }, "Vaartstraat 23, 3970 Leopoldsburg \xB7 Belgisch Limburg & Noord-Brabant"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-family-base)',
      fontSize: 13,
      color: 'rgba(255,255,255,0.45)'
    }
  }, "\xA9 Powerpartner")));
}
window.SiteFooter = SiteFooter;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/SiteFooter.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/SiteHeader.jsx
try { (() => {
/* global React */
// Powerpartner site header — logo + single CTA (conversion-focused, minimal nav).
function SiteHeader({
  onCta
}) {
  const {
    Button
  } = window.PowerpartnerDesignSystem_5b2f24;
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 20,
      background: 'rgba(255,255,255,0.96)',
      backdropFilter: 'saturate(140%) blur(6px)',
      borderBottom: '1px solid var(--border-default)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '14px 24px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-wordmark-dark.png",
    alt: "Powerpartner",
    style: {
      height: 34
    }
  }), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 28
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 24
    },
    className: "pp-navlinks"
  }, ['Zonnepanelen', 'Thuisbatterij', 'Laadpalen'].map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    style: {
      fontFamily: 'var(--font-family-base)',
      fontSize: 15,
      fontWeight: 600,
      color: 'var(--text-primary)',
      textDecoration: 'none'
    }
  }, l))), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    onClick: onCta
  }, "Gratis adviesgesprek"))));
}
window.SiteHeader = SiteHeader;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/SiteHeader.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/Survey.jsx
try { (() => {
/* global React */
// Interactive survey / lead form — multi-step, ends with consult booking confirmation.
function Survey() {
  const {
    Button,
    Input,
    Checkbox,
    Badge
  } = window.PowerpartnerDesignSystem_5b2f24;
  const [step, setStep] = React.useState(0);
  const [regio, setRegio] = React.useState(null);
  const [situatie, setSituatie] = React.useState(null);
  const Pill = ({
    active,
    children,
    onClick
  }) => /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    style: {
      fontFamily: 'var(--font-family-base)',
      fontSize: 16,
      fontWeight: 600,
      cursor: 'pointer',
      padding: '16px 18px',
      borderRadius: 'var(--radius-md)',
      textAlign: 'left',
      border: active ? '2px solid var(--pp-green)' : '2px solid var(--border-strong)',
      background: active ? 'var(--pp-green-soft)' : 'var(--pp-white)',
      color: 'var(--text-primary)',
      transition: 'all var(--transition-fast)'
    }
  }, children);
  return /*#__PURE__*/React.createElement("section", {
    id: "survey",
    style: {
      background: 'var(--pp-gray-light)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 640,
      margin: '0 auto',
      padding: '80px 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--pp-white)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-xl)',
      padding: 36,
      boxShadow: 'var(--shadow-md)'
    }
  }, step < 3 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      marginBottom: 24
    }
  }, [0, 1, 2].map(i => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      height: 5,
      flex: 1,
      borderRadius: 3,
      background: i <= step ? 'var(--pp-green)' : 'var(--pp-neutral-200)'
    }
  }))), step === 0 && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-family-base)',
      fontWeight: 700,
      fontSize: 'var(--font-size-h3)',
      margin: '0 0 6px'
    }
  }, "Waar woon je?"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-secondary)',
      margin: '0 0 22px'
    }
  }, "Zo koppelen we je aan de juiste adviseur."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Pill, {
    active: regio === 'be',
    onClick: () => setRegio('be')
  }, "\uD83C\uDDE7\uD83C\uDDEA Belgisch Limburg"), /*#__PURE__*/React.createElement(Pill, {
    active: regio === 'nl',
    onClick: () => setRegio('nl')
  }, "\uD83C\uDDF3\uD83C\uDDF1 Noord-Brabant (NL)")), /*#__PURE__*/React.createElement(Button, {
    fullWidth: true,
    size: "lg",
    style: {
      marginTop: 24
    },
    disabled: !regio,
    onClick: () => setStep(1)
  }, "Volgende")), step === 1 && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-family-base)',
      fontWeight: 700,
      fontSize: 'var(--font-size-h3)',
      margin: '0 0 6px'
    }
  }, "Wat past bij jou?"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-secondary)',
      margin: '0 0 22px'
    }
  }, "Geen verplichtingen \u2014 we denken gewoon met je mee."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Pill, {
    active: situatie === 'geen',
    onClick: () => setSituatie('geen')
  }, "Nog geen zonnepanelen"), /*#__PURE__*/React.createElement(Pill, {
    active: situatie === 'wel',
    onClick: () => setSituatie('wel')
  }, "Wel panelen, geen batterij"), /*#__PURE__*/React.createElement(Pill, {
    active: situatie === 'klant',
    onClick: () => setSituatie('klant')
  }, "Al klant bij Powerpartner")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "lg",
    onClick: () => setStep(0)
  }, "Terug"), /*#__PURE__*/React.createElement(Button, {
    fullWidth: true,
    size: "lg",
    disabled: !situatie,
    onClick: () => setStep(2)
  }, "Volgende"))), step === 2 && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-family-base)',
      fontWeight: 700,
      fontSize: 'var(--font-size-h3)',
      margin: '0 0 6px'
    }
  }, "Hoe bereiken we je?"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-secondary)',
      margin: '0 0 22px'
    }
  }, "Sofie plant een gratis adviesmoment voor je in."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Je voornaam",
    placeholder: "Bv. Jan",
    required: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: "E-mailadres",
    type: "email",
    placeholder: "jan@voorbeeld.be",
    required: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Telefoon",
    placeholder: "0470 12 34 56"
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "Ja, bel of mail me voor een vrijblijvende afspraak",
    defaultChecked: true
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "lg",
    onClick: () => setStep(1)
  }, "Terug"), /*#__PURE__*/React.createElement(Button, {
    fullWidth: true,
    size: "lg",
    onClick: () => setStep(3),
    iconRight: /*#__PURE__*/React.createElement("span", null, "\u2192")
  }, "Plan mijn adviesgesprek"))), step === 3 && /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: '12px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 64,
      height: 64,
      borderRadius: '50%',
      background: 'var(--pp-green-soft)',
      color: 'var(--pp-green)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0 auto 20px',
      fontSize: 32,
      fontWeight: 800
    }
  }, "\u2713"), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-family-base)',
      fontWeight: 700,
      fontSize: 'var(--font-size-h3)',
      margin: '0 0 10px'
    }
  }, "Bedankt! We nemen contact op."), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-secondary)',
      margin: '0 0 22px',
      lineHeight: 1.6
    }
  }, regio === 'nl' ? 'Marcel' : 'Yanco', " of Sofie belt je binnen 1 werkdag om een gratis adviesmoment in te plannen. Tot snel!"), /*#__PURE__*/React.createElement(Badge, {
    tone: "soft-green"
  }, "Gratis & vrijblijvend"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: () => {
      setStep(0);
      setRegio(null);
      setSituatie(null);
    }
  }, "Opnieuw beginnen"))))));
}
window.Survey = Survey;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/Survey.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Stat = __ds_scope.Stat;

__ds_ns.Testimonial = __ds_scope.Testimonial;

__ds_ns.TrustBar = __ds_scope.TrustBar;

})();
