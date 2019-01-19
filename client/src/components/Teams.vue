<template lang="pug">
  div(id="teams" class="page-section page-section--teams page-section--no-b-padding-until-large" data-matching-link="#teams-link")
    div(class="wrapper wrapper--no-padding-until-large")
      h2(class="section-title section-title--color")
        span(class="section-title__icon icon icon--comments")
          i(class="fas fa-comments")
          |  Our
          strong Teams

      div(class="row row--gutters row--equal-height-at-large row--t-padding row--gutters-small generic-content-container")
        div.row__large-6
          div(class="team" data-aos="zoom-out" data-aos-duration="1500")
            div.team__photo
              img(class="team__photo--translate" src="../assets/images/developer.jpeg")
            h3.team__title Development
            h4.team__subtitle The Technical Team
            p Our team of developers aim to leverage modern technologies to reach more customers. We utilize consumer data for increased retention of clients, while also gleaning a more efficient way of implementing business strategies.

        div.row__large-6
          div(class="team" data-aos="zoom-out" data-aos-duration="1500")
            div.team__photo
              img(src="../assets/images/marketing.jpeg")
            h3.team__title Marketing
            h4.team__subtitle The Reach Team
            p Our experienced team of marketing gurus seek to expand your brand awareness. We do so by learning the elements of your business from the inside-out, and by designing a digital marketing presence for you to increase conversions and sales.

      div(class="row row--gutters row--equal-height-at-large  row--t-padding row--gutters-small generic-content-container")
        div.row__large-6
          div(class="team" data-aos="zoom-out" data-aos-duration="1500")
            div.team__photo
              img(src="../assets/images/graphic-design.jpeg")
            h3.team__title Graphic Design
            h4.team__subtitle The Visual Team
            p The graphic design team expertly translates your company's brand into a visual landscape. A comprehensive and consistent aesthetic creates a sense of trust with your customers they can identify and believe in.

        div.row__large-6
          div(class="team" data-aos="zoom-out" data-aos-duration="1500")
            div.team__photo
              img(class="team__photo--translate" src="../assets/images/authorship.jpeg")
            h3.team__title Authorship
            h4.team__subtitle The Literary Team
            p.team--text-align
              strong A Haiku:
              br
              |  Words spring vital life
              br
              |  Clients you will gain and keep
              br
              |  Vittles and drink, yay
</template>

<script>
  export default {
    name: 'Teams'
  }
</script>

<style lang="scss">
  .team {
  	background-color: rgba(255, 255, 255, .8);
  	padding: 18px;
  	margin-bottom: 98px;

  	@include atLarge {
  		padding: 0 1.8125rem 1px 1.8125rem;
  		margin-bottom: 25px;
  	}

  	&__photo {
  		border-radius: 50%;
  		overflow: hidden;
  		width: 160px;
  		height: 160px;
  		margin: 0 auto -80px auto;
  		position: relative;
  		top: -80px;
  		border: 6px solid rgba(255, 255, 255, .8);

  		&--translate {
  			height: 100%;
  		}
  	}

  	&__title {
  		color: $mainBlueGrey;
  		text-align: center;
  		font-size: 1.5rem;
  		font-weight: 500;
  		margin: 0;
  	}

  	&__subtitle {
  		color: $mainOrange;
  		text-align: center;
  		font-weight: 400;
  		font-size: .93rem;
  		margin: .25rem 0 1rem 0;
  	}

  	&--last {
  		margin-bottom: 0;
  	}

  	&--text-align {
  		text-align: center;
  	}
  }
</style>
