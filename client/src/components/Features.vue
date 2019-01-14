<template lang="pug">
  div(id="features" class="page-section page-section--blue" data-matching-link="#features-link")
    div.wrapper
      h2.section-title
        span(class="section-title__icon")
          i(class="fas fa-dolly-flatbed")
        | Our 
        strong Features
      div(class="row row--gutters-large generic-content-container")
        div.row__medium-6
          div.feature-item
            h3.feature-item__title
              span(class="section-title__icon")
                i(class="fas fa-globe")
                |  Social Media
            p We&rsquo;ll create and manage your social media profiles, generating engaging content, and reach a broader spectrum of clientele for your business.

          div.feature-item
            h3.feature-item__title
              span(class="section-title__icon") 
                i(class="fas fa-search-plus")
                |  SEO
            p Search Engine Optimization is the art of having your site reach the widest group of clients possible. Use our services, and we&rsquo;ll make sure you cast the widest net possible.
            
          div.feature-item
            h3.feature-item__title
              span(class="section-title__icon")
                i(class="fas fa-file-alt")
                |  Digital Feng Shui
            p It can often be difficult to keep your business and life organized. Let us help improve your workflow. Whether it be digital file management, desktop decluttering, or cultivating practical habits for organization, we&rsquo;ve got you covered.

        div.row__medium-6
          div.feature-item
            h3.feature-item__title
              span(class="section-title__icon icon")
                i(class="fas fa-sitemap")
                |  Web Design
            p Our team creates stunning, modern websites to propel your business forward. Fully-tailored custom sites to suit your eyes and budget.

          div.feature-item
            h3.feature-item__title
              span(class="section-title__icon")
                i(class="fas fa-reply-all")
                |  Reputation Management
            p Your reputation is everything. We specialize in managing every aspect of your online persona. We engage with your customers directly, allowing us to maximize your brand awareness and keep the conversation flowing.

          div.feature-item
            h3.feature-item__title
              span(class="section-title__icon")
                i(class="fas fa-align-left")
                |  Content Generation
            p Well-branded creative content defines your digital presence, shaping your business identity. Our completely customized content will be tailored to your client base.
</template>

<style lang="scss">
  .feature-item {
  	position: relative;
  	padding-bottom: 2.5rem;

  	@include atSmall {
  		padding-left: 64px;
  	}

  	&__icon {
  		display: block;
  		margin: 0 auto;

  		@include atSmall {
  			position: absolute;
  			left: 0;
  		}
  	}

  	&__title {
  		font-size: 1.6rem;
  		font-weight: 300;
  		margin-bottom: .8rem; 
  		margin-top: .7em;
  		text-align: center;

  		@include atSmall {
  			margin-top: 1em;
  			font-size: 1.875rem;
  			text-align: left;
  		}
  	}
  }
  
  .section-title {
  	font-size: 2.55rem;
  	font-weight: 300;
  	text-align: center;

  	@include atSmall {
  		font-size: 3.75rem;
  	}

  	strong {
  		font-weight: 500;
  	}

  	&__icon {
  		display: block;
  		margin-left: auto;
  		margin-right: auto;
  		margin-bottom: .6rem;

  		@include atSmall {
  			margin-right: .5rem;
  			margin-left: 0;
  			display: inline-block;
  			margin-bottom: 0;
  			position: relative;
  			top: 8px;
  		}
  	}

  	&--blue {
  		color: $mainBlueGrey;
  	}

  	&--color {
  		color: #C7AE62;
  	}

  	&--less-margin {
  		margin-bottom: 1.3rem;
  		margin-top: 0;
  	}
  	
  	&--contact {
  		background: #4D4D4D;
      	text-transform: uppercase;
      	font-family: 'Open Sans Condensed', sans-serif;
      	color: #efefef;
      	font-size: 18px;
      	font-weight: 100;
      	padding: 20px;
      	/*margin: -30px -30px 30px -30px;*/
  	}
  }
</style>
