# Styled Components Library

This repository contains a collection of reusable and customizable React components styled with Tailwind CSS. These components are designed to provide a consistent look and feel across your applications while being flexible enough to adapt to different use cases.

## Components

### 1. **Primary Button**
A button styled for primary actions, meant to grab the user's attention.

**Props:**
- `text` (string or element, required): The text displayed on the button.
- `onClick` (function, optional): The function to execute on click.
- `disabled` (boolean, optional): Disables the button when true.
- `disabledText` (string, optional): The text to be displayed when button is disabled.
- `className` (string, optional): To override default styles.

```jsx
<PrimaryButton text="Submit" onClick={handleSubmit} disabled={isLoading} />
```

---

### 2. **Secondary Button**
A button styled for secondary actions or less prominent use cases.

**Props:**
- `text` (string or element, required): The text displayed on the button.
- `onClick` (function, optional): The function to execute on click.
- `disabled` (boolean, optional): Disables the button when true.
- `disabledText` (string, optional): The text to be displayed when button is disabled.
- `className` (string, optional): To override default styles.

```jsx
<SecondaryButton text="Cancel" onClick={handleCancel} />
```

---

### 3. **Loading Placeholder**
A skeleton-like placeholder for loading states.

**Props:**
- `className` (string, optional): To override default styles.

```jsx
<Loader />
```

---

### 4. **Timeline**
A vertical timeline component for displaying chronological events or steps.

**Props:**
- `isFilled` (boolean, required): To specify if the timeline circle should be filled.
- `isLast` (boolean, required): To specify if the given timeline element is the last element.
- `children` (element, required): The component to be displayed with the timeline.

```jsx
 <Timeline isFilled={false} isLast={true}>
    <p>{item}</p>
 </Timeline>
```

---

### 5. **Input**
A styled text input field.

**Props:**
- `value` (string, required): The current value of the input.
- `onChange` (function, required): Callback for value changes.
- `placeholder` (string, optional): Placeholder text for the input field.
- `className` (string, optional): Overrides default styles.

```jsx
<Input value={name} onChange={handleNameChange} placeholder="Enter your name" />
```

---

### 6. **Password Input**
A styled input field for passwords with a toggle for visibility.

**Props:**
- `value` (string, required): The current value of the input.
- `onChange` (function, required): Callback for value changes.
- `placeholder` (string, optional): Placeholder text for the input field.

```jsx
<PasswordInput value={password} onChange={handlePasswordChange} placeholder="Enter your password" />
```

---

### 7. **Error**
A component for displaying error messages in a consistent style.

**Props:**
- `text` (string, required): The error message to display.
- `isOpen` (boolean, required): To show / hide the error.

```jsx
<Error message="Something went wrong. Please try again." />
```

---

### 8. **Security Headers**

A component which adds basic security measures using React Helmet.

```jsx
<SecurityHeaders />
```

---