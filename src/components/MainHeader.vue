<template>
	<div class="ms-header">
		<div class="container">
			<div class="row">
				<div class="col-md-3 col-sm-12">
					<a href="#" class="hidden-xs logo_a">
						<img class="ms-logo" src="http://d33wubrfki0l68.cloudfront.net/499faca5d29f6279baa1f8dd6d2ba3ddb9868e84/66b17/img/logo_msp4.svg" alt="Logo">
					</a>
				</div>
				<div class="col-md-9">
					<nav class="ms-nav navbar navbar-default navbar-right">
						<div class="navbar-header">
							<ul class="ms-nav__list nav navbar-nav">
								<template v-if="!userIsAuthenticated">
									<li class="ms-nav__list">
										<a href="#" itemprop="url" id="signInLink" data-toggle="modal" data-target="#myModal" class="ms-nav__link" @click.prevent="dialog = true">Зарегистрироваться</a>
									</li>
									<li class="ms-nav__list">
										<a href="#" itemprop="url" class="ms-nav__link" @click.prevent="dialog = true">Войти</a>
									</li>
								</template>
								<template v-else>
									<li class="ms-nav__list">
										<router-link :to="{name: 'cabinet', params: { id: userInfo.id }}" class="ms-nav__link">Кабинет</router-link>
									</li>
									<li class="ms-nav__list">
										<a href="#" @click.prevent="onLogout">Выйти</a>
									</li>
								</template>
							</ul>
						</div>
					</nav>
				</div>
			</div>
		</div>
		<div class="container">
			<div class="col-md-7 col-md-offset-5">
				<div class="ms-menu">
					<ul class="ms-menu__list nav navbar-nav">
						<li class="ms-menu__item ms-menu__item--bayer">
							<a href="https://msp4.biz" class="ms-menu__link">Клиенты</a>
						</li>
						<li class="ms-menu__item ms-menu__item--has-children">
							<a href="/" class="dropdown-toggle ms-menu__link">Тайные покупатели</a>
						</li>
					</ul>
				</div>
				<nav class=" ms-navigation navbar navbar-default ">
					<div class="container-fluid">
						<div class="navbar-header">
							<a href="#" class="visible-xs pull-left">
								<img class="ms-logo img-responsive" src="http://d33wubrfki0l68.cloudfront.net/499faca5d29f6279baa1f8dd6d2ba3ddb9868e84/66b17/img/logo_msp4.svg" alt="Logo">
							</a>

							<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#primary-navigation" aria-expanded="false">
								<span class="sr-only">Toggle navigation</span>
								<span class="icon-bar"></span>
								<span class="icon-bar"></span>
								<span class="icon-bar"></span>
							</button>
							<div class="login">
								<a href="#" itemprop="url" id="signInLink" data-toggle="modal" data-target="#myModal" class="ms-nav__link"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 21">
									<g class="login-btn-svg" fill="none" fill-rule="evenodd" stroke="#fff" stroke-width="2" transform="translate(1 1)">
										<path d="M5.398 11C-.067 12.652 0 17.55 0 17.55S2.716 19 8.5 19s8.5-1.45 8.5-1.45.066-4.637-5.198-6.463"></path>
										<circle cx="8.5" cy="4.5" r="4.5"></circle>
									</g>
								</svg>
								</a>
							</div>
						</div>
						<div class="navbar-collapse collapse" id="primary-navigation">
							<ul class="ms-navigation__list nav navbar-nav navbar-right">
								<li class="ms-navigation__item">
									<a class="ms-navigation__link" href="#preference">Наши преимущества</a>
								</li>
								<li class="ms-navigation__item">
									<a class="ms-navigation__link" href="#simple">Условия работы</a>
								</li>
								<li class="ms-navigation__item">
									<a class="ms-navigation__link" href="https://msp4.me/faq/">FAQ</a>
								</li>
								<li class="ms-navigation__item">
									<a class="ms-navigation__link" href="#news">Блог</a>
								</li>
								<li class="ms-navigation__item">
									<a class="ms-navigation__link" href="#footer">Контакты</a>
								</li>
							</ul>
						</div>
					</div>
				</nav>
			</div>
		</div>
		<section class="ms-banner">
			<div class="container">
				<div class="col-xs-12 text-center" id="headText">
					<h3>Зарабатывай с нами!</h3>
					<p class="ms-information">Дополнительный заработок в свободное время для всех.<br> Обучаем Тайных Покупателей, предоставляем работу.<br> Начните
						прямо сейчас, повышайте свой уровень — повышайте доход!</p>
					<a class="ms-button btn btn-default" href="#" itemprop="url" id="signInLink" data-toggle="modal" data-target="#myModal">Стать тайным покупателем</a>
					<p class="ms-description">регистрация через соцсети</p>
				</div>
			</div>
		</section>

		<!-- modal -->
		<div class="modal fade in" v-if="dialog">
			<div class="modal__overlay" @click="dialog = false"></div>
			<div class="modal-dialog vertical-align-center" role="document">
				<div class="modal-content">
					<div class="modal-header">
						<button type="button" class="close" @click.prevent="dialog = false">×</span></button>
						<h4 class="modal-title">Войти с помощью:</h4>
					</div>
					<div class="modal-body text-center">
						<ul class="list-inline">
							<li>
								<a href="http://shopper.msp4.me/auth/facebook" onclick="ga('send', 'event', 'button', 'click', 'registration');">
									<img src="http://d33wubrfki0l68.cloudfront.net/af818fbc1568169e46b38027e03c14094c914713/f14e8/img/facebook.png" alt="Facebook">
									<br>Facebook
								</a>
							</li>
							<li>
								<a class="ms-google" href="http://shopper.msp4.me/auth/google" onclick="ga('send', 'event', 'button', 'click', 'registration');">
									<img src="http://d33wubrfki0l68.cloudfront.net/baeb7e8ccfda30b9fdf4e624abf2ba0bbe85db7b/6c980/img/google.png" alt="Google" @click.prevent="onSigninGoogle">
									<br>Google
								</a>
							</li>
							<li class="hidden_li">
								<a href="http://shopper.msp4.me/auth/mailru" onclick="ga('send', 'event', 'button', 'click', 'registration');">
									<img src="http://d33wubrfki0l68.cloudfront.net/dc0bad114242db3421e0a9d04fbc25d84e0f2c41/7df66/img/mailru.png" alt="Mailru">
									<br>Mail.ru
								</a>
							</li>
							<li class="hidden_li">
								<a class="ms-yandex" href="http://shopper.msp4.me/auth/yandex" onclick="ga('send', 'event', 'button', 'click', 'registration');">
									<img src="http://d33wubrfki0l68.cloudfront.net/16b3086b3bf93ea9a5c7f0c9267aeb95199457a3/bf50b/img/yandex.png" alt="Yandex">
									<br>Yandex
								</a>
							</li>
						</ul>
						<p class="button_li">Другие способы входа</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
data(){
  return{
	dialog: false
  }
},
computed: {
  userInfo(){
	let userInfo = {}
	if(this.userIsAuthenticated){
	  userInfo = {
		id: this.userIsAuthenticated.id,
		avatar: this.userIsAuthenticated.photoUrl,
		email: this.userIsAuthenticated.email
	  }
	}
	return userInfo
  },
  userIsAuthenticated () {
	return this.$store.getters.user
  },
},
methods: {
  onSigninGoogle () {
	this.$store.dispatch('signUserInGoogle')
	this.dialog = false
	//this.$router.push('/cabinet/:id')
  },
  onLogout () {
	this.$store.dispatch('logout')
	this.$router.push('/')
  }
}
}
</script>

<style>

</style>