# Vue.js Basics: Connectivity & Reactivity 🚀

This project is a simple demonstration of how to integrate **Vue 3** into a standard HTML page and utilize its core features like data binding and lifecycle hooks.

---

## 💡 Key Features in this Code

### 1. Library Integration (CDN)
The project uses the Global Build of Vue 3 via a CDN. This allows the browser to recognize Vue commands without a complex build setup.
```html
<script src="[https://unpkg.com/vue@3/dist/vue.global.js](https://unpkg.com/vue@3/dist/vue.global.js)"></script>

2. Two-Way Data Binding (v-model)

The v-model directive creates a connection between the input field and the greeting data property.

    Input to Logic: When you type in the input, the variable updates.

    Logic to UI: When the variable changes, the input text updates.

    Bonus: {{ greeting.length }} displays the character count in real-time.

3. Reactive Data (data())

The data() function returns the "State" of the application. Everything inside this object is Reactive, meaning Vue watches it for changes to keep the DOM in sync.
4. Lifecycle Hook (mounted())

The mounted() function is a special Vue method that runs automatically once the app is successfully linked to the HTML.

    In this example, it uses a setTimeout to change the text after 3 seconds, demonstrating how Vue handles asynchronous updates.

5. Application Mounting (.mount('#app'))

This is the bridge that connects the Vue instance to the HTML element with id="app".

    Note: "To bind Vue to HTML" is the technical term for this process.

🛠️ How to Run

    Clone the repository.

    Open the index.html file in any modern web browser.

    Observe how the "hello world" text changes automatically after 3 seconds, or try typing in the input box!

📝 Code Snippet
JavaScript

Vue.createApp({
    data() {
        return {
            greeting: "hello world"
        };
    },
    mounted() {
        setTimeout(() => {
            this.greeting = "changed";
        }, 3000);
    }
}).mount('#app');

Happy Coding! 💻

