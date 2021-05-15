<template>
    <div class="main-login">
        <h3>Login</h3>
        <input
            class="input-form email-input"
            type="text"
            placeholder="Email"
            v-model="email"
        />
        <input
            class="input-form psw-input"
            type="password"
            placeholder="Password"
            v-model="password"
        />
        <button class="submit-btn" type="submit" @click="onLogin">
            <!-- <router-link to="/">Login</router-link> -->Login
        </button>
    </div>
</template>

<script>
export default {
    name: "Login",
    data() {
        return {
            email: "",
            password: ""
        };
    },
    methods: {
        onLogin() {
            this.$store.dispatch("getLogin", {
                email: this.email,
                password: this.password
            });
        }
    }
};
</script>

<style scoped>
.main-login {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-transform: uppercase;
}

.submit-btn {
    text-transform: uppercase;
    font-size: 14px;
    padding: 9px 24px;
    background: rgb(62, 83, 117);
    border-radius: 5px;
    cursor: pointer;
    text-decoration: none;
    color: white;
}

.input-form {
    width: 250px;
    padding: 10px 15px;
}

.email-input {
    margin-bottom: 10px;
}

.psw-input {
    margin-bottom: 15px;
}
</style>
