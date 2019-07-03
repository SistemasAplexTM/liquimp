<template>
	<vue-scroll class="login-page align-vertical">
		<div class="form-wrapper align-vertical-middle">
			<div class="form-box card-base card-shadow--extraLarge">
				<img class="image-logo" src="@/assets/images/logoL.png" alt="logo"/>

				<float-label class="styled">
					<input type="email" placeholder="Correo" v-model="form.email">
				</float-label>
				<float-label class="styled">
					<input type="password" placeholder="Contraseña" v-model="form.password">
				</float-label>

				<div class="flex">
					<div class="box grow"><el-checkbox>Recordarme </el-checkbox></div>
					<div class="box grow text-right"><router-link to="/dashboard">¿Olvidó su contraseña?</router-link></div>
				</div>

				<div class="flex text-center center pt-30 pb-10">
					<el-button plain size="small" @click="login" class="login-btn tada animated" :loading="loading">
						Iniciar sesión
					</el-button>
				</div>
				<el-alert
					v-show="isLoged"
					title="Inicio exitoso!"
					description="Redireccionando..."
					type="success"
					show-icon>
				</el-alert>

				<div class="text-center signin-box pt-20">
					¿No tiene cuenta? <a>Crear</a>
				</div>
			</div>
		</div>
	</vue-scroll>
</template>

<script>
import { login } from '@/api/auth'

export default {
	name: 'Login',
	data() {
		return {
			form: {
				email: 'admin@admin.com',
				password: 'admin123',
			},
			loading: false,
			isLoged: false
		}
	},
	methods: {
		login() {
			this.loading = true
			login(this.form).then(({data}) => {
				this.isLoged = true
				this.$store.commit('setLogin', data.access_token)
				let me = this
				setTimeout(function () {
					me.$router.push('dashboard')
				}, 300);
				this.loading = false
			}).catch(error => {
				console.log('error ', error);
				this.loading = false
				this.isLoged = false
			})
		}
	}
}
</script>

<style lang="scss">
@import '../../../assets/scss/_variables';

.login-page {
	background: $text-color;
	margin-left: -30px;
	margin-right: -30px;

	.form-wrapper {
		width: 100%;
	}

	.form-box {
		width: 100%;
		max-width: 340px;
		padding: 30px;
		box-sizing: border-box;
		margin: 20px auto;

		a {
			font-size: 14px;
			color: $text-color-accent;
			text-decoration: none;
			font-weight: 500;
		}

		.image-logo {
			width: 150px;
			margin: 0px auto;
			margin-bottom: 30px;
			display: block;
		}

		.login-btn ,
		.social-btn {
			width: 160px;

			&.google {
				margin-bottom: 10px;
				background-color: #d73d32;
				color: white;

				&:hover {
					border-color: #d73d32;
				}
			}
			&.facebook {
				background-color: #3f5c9a;
				color: white;

				&:hover {
					border-color: #3f5c9a;
				}
			}
		}

		.signin-box {
			font-size: 14px;
		}
	}
}

@media (max-width: 768px) {
	.layout-container .container .view.login-page {
		margin-left: -5px;
		margin-right: -5px;
		max-width: calc(100% + 10px);
	}
}
</style>
