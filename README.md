## 🧠 Explanation

هذا المشروع هو مثال بسيط يوضح كيفية استخدام **Vue 3** لعمل تفاعل (interaction) مع المستخدم عن طريق تغيير شكل الزر عند الضغط عليه.

---

### 🔹 فكرة المشروع

لدينا زر (Button)، وعند الضغط عليه:

* يتغير لونه من **أخضر** إلى **أحمر**
* وعند الضغط مرة أخرى يرجع إلى **أخضر**

هذا يتم باستخدام خاصية **Reactive Data** في Vue.

---

### 🔹 كيف يعمل الكود؟

#### 1. إنشاء تطبيق Vue

```javascript
Vue.createApp({...}).mount('#app');
```

* يتم إنشاء تطبيق Vue وربطه بالعنصر الذي يحتوي على `id="app"`
* أي شيء داخل هذا العنصر يصبح تحت تحكم Vue

---

#### 2. البيانات (Data)

```javascript
data() {
  return {
    active: true,
    buttonGreenColor: "green-text",
    buttonRedColor: "red-text"
  };
}
```

* `active`: متغير Boolean يتحكم في حالة الزر (تشغيل / إيقاف)
* إذا كانت `true` → الزر أخضر
* إذا كانت `false` → الزر أحمر

---

#### 3. ربط الكلاسات بشكل ديناميكي

```html
<button :class="active ? buttonGreenColor : buttonRedColor">
```

* `:class` تعني ربط الكلاس بشكل ديناميكي
* Vue تختار الكلاس حسب قيمة `active`

  * `true` → `green-text`
  * `false` → `red-text`

---

#### 4. التعامل مع الضغط (Click Event)

```html
@click="toggle"
```

```javascript
methods: {
  toggle() {
    this.active = !this.active;
  }
}
```

* عند الضغط على الزر يتم استدعاء الدالة `toggle`
* الدالة تقوم بعكس القيمة:

  * `true` → `false`
  * `false` → `true`
* وبالتالي يتغير اللون

---

#### 5. التنسيقات (CSS)

```css
.green-text {
  color: green;
}
.red-text {
  color: red;
}
```

* هذه الكلاسات هي التي تحدد شكل الزر
* Vue فقط تقوم بتبديل الكلاس، وCSS هو المسؤول عن الشكل

---

#### 6. Lifecycle Hook (mounted)

```javascript
mounted() {
  setTimeout(() => {
    this.greeting = "changed";
  }, 3000);
}
```

* يتم تنفيذ هذا الكود بعد تحميل الصفحة
* بعد 3 ثواني يتم تغيير قيمة `greeting`
* (ملحوظة: المتغير غير مستخدم في الواجهة)

---

### 🔥 الخلاصة

* Vue تراقب المتغيرات (Reactive)
* عند تغيير `active` → الواجهة تتحدث تلقائيًا
* لا تحتاج للتعامل مع DOM يدويًا

---

### ✅ لماذا هذا المثال مهم؟

لأنه يشرح أساسيات Vue:

* ربط البيانات بالواجهة (Data Binding)
* التفاعل مع المستخدم (Events)
* التغيير الديناميكي في التصميم (Dynamic Styling)
