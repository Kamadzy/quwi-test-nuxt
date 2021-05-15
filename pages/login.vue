<template>
    <div class="main-login">
        <h3>Login</h3>
        <form @submit.prevent="onSubmit">
            <label>
                <input
                    class="input-form email-input"
                    type="text"
                    placeholder="Email"
                    v-model="email"
                />
            </label>
            <label>
                <input
                    class="input-form psw-input"
                    type="password"
                    placeholder="Password"
                    v-model="password"
                />
            </label>
            <button
                class="submit-btn"
                type="submit"
            />
        </form>
    </div>
</template>

<script>
export default {
    layout: 'empty',
    name: 'Login',

    data() {
        return {
            email: '',
            password: ''
        };
    },

    methods: {
        onSubmit() {
            this.$store.dispatch('login', {
                email: this.email,
                password: this.password
            })
            this.$router.push('/')
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
