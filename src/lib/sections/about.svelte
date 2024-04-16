<script lang="ts">
  import { onMount } from "svelte";
  import {
    aboutAnchor,
    loadPagePromise,
    slickScrollInstance,
  } from "$lib/store";
  import { letterSlideIn, maskSlideIn } from "$lib/animations";
  import { loadImage, onScrolledIntoView } from "$lib/utils";

  let section1Element: HTMLElement, section2Element: HTMLElement;
  let profilePicContainer: HTMLElement;

  // Promise which when resolved will trigger svelte animations
  let sectionOneResolve: (value?: any) => void;
  let sectionOnePromise = new Promise(
    (resolve) => (sectionOneResolve = resolve)
  );
  let sectionTwoResolve: (value?: any) => void;
  let sectionTwoPromise = new Promise(
    (resolve) => (sectionTwoResolve = resolve)
  );

  onMount(async () => {
    // Wait for page to load
    await loadPagePromise;
    // Set navbar about link's y location to top of aboutContainer
    $aboutAnchor = section1Element;

    $slickScrollInstance.addOffset({
      element: profilePicContainer,
      speedY: 0.8,
    });

    onScrolledIntoView(section1Element, () => sectionOneResolve(true));
    onScrolledIntoView(section2Element, () => sectionTwoResolve(true));
  });

  function titleIn(node: HTMLElement) {
    const titleAnimation = letterSlideIn(node, { delay: 15 });
    titleAnimation.anime();
  }

  // Add parallax scrolling offsets to slickScroll
  function addSlickScrollOffset(node: HTMLElement) {
    $slickScrollInstance.addOffset({
      element: node,
      speedY: 0.8,
    });
  }
</script>

<div id="content-container" class="about" bind:this={section1Element}>
  {#await sectionOnePromise then _}
    <div class="content-wrapper">
      <h1 class="title" use:titleIn>
        Hi I'm <br />Aditya
      </h1>
      <div in:maskSlideIn={{ duration: 1200, reverse: true, delay: 150 }}>
        <p class="paragraph">
          I'm a full-stack developer from San Francisco, Caliornia. From
          front-end design to back-end functionality,<br /><br />I graduated
          from George Mason University with MS in Computer Science and I thrive
          on bringing ideas to life in the digital realm. Whether it's building
          intuitive user interfaces or optimizing database performance, I'm
          dedicated to delivering top-notch web experiences. Reach out via
          email, and let's discuss how we can create something extraordinary
          together.
        </p>
      </div>
      <div class="social-button-wrapper">
        <div in:maskSlideIn={{ delay: 400, reverse: true }}>
          <span class="button"
            ><a
              href="mailto:arajput4@gmu.edu"
              target="_blank"
              class="clickable sublink link">Email Me</a
            ></span
          >
        </div>
        <div in:maskSlideIn={{ delay: 700, reverse: true }}>
          <span class="button"
            ><a
              href="https://www.linkedin.com/in/adityasingh99/"
              target="_blank"
              class="clickable sublink link">LinkedIn</a
            ></span
          >
        </div>
      </div>
    </div>
    <div class="profile-image" use:addSlickScrollOffset>
      {#await loadImage("assets/imgs/profile-photo.jpg") then src}
        <img
          {src}
          in:maskSlideIn={{
            duration: 1200,
            delay: 100,
            reverse: true,
            maskStyles: [
              { property: "width", value: "100%" },
              { property: "height", value: "100%" },
            ],
          }}
          alt="Aditya Singh's Profile"
          class="profile-pic"
        />
      {/await}
    </div>
  {/await}
</div>

<div class="horizontal-flex" bind:this={section2Element}>
  {#await sectionTwoPromise then _}
    <ul class="list first">
      <li class="list-title">
        <div in:letterSlideIn={{ initDelay: 400 }}>technical expertise</div>
      </li>
      <li>
        <div in:letterSlideIn={{ initDelay: 550 }}>Tech Skills</div>
        <div class="flex-item" in:maskSlideIn={{ delay: 600 }}>
          <img src="assets/imgs/svg-icons/python.svg" alt="Python" />
          <img src="assets/imgs/svg-icons/js.svg" alt="Javascript" />
          <img src="assets/imgs/svg-icons/java.svg" alt="Java" />
          <img src="assets/imgs/svg-icons/ts.svg" alt="Typescript" />
          <img src="assets/imgs/svg-icons/go.svg" alt="GoLang" />
        </div>
      </li>
      <li>
        <div in:letterSlideIn={{ initDelay: 650 }}>Web-Tech</div>
        <div class="flex-item" in:maskSlideIn={{ delay: 700 }}>
          <img src="assets/imgs/svg-icons/nextjs.svg" alt="Next" />
          <img src="assets/imgs/svg-icons/react.svg" alt="React" />
          <img src="assets/imgs/svg-icons/tailwind.svg" alt="Tailwind" />
          <img src="assets/imgs/svg-icons/html.svg" alt="HTML" />
          <img src="assets/imgs/svg-icons/css.svg" alt="CSS" />
          <img src="assets/imgs/svg-icons/bootstrap.svg" alt="Bootstrap" />
          <img src="assets/imgs/svg-icons/gsap.svg" alt="GSAP" />
          <img src="assets/imgs/svg-icons/framer.svg" alt="Framer Motion" />
          <img src="assets/imgs/svg-icons/nodejs.svg" alt="node js" />
        </div>
      </li>
      <li>
        <div in:letterSlideIn={{ initDelay: 750 }}>Database</div>
        <div class="flex-item" in:maskSlideIn={{ delay: 800 }}>
          <img src="assets/imgs/svg-icons/mysql.svg" alt="MySQL" />
          <img src="assets/imgs/svg-icons/postgresql.svg" alt="PostgreSQL" />
          <img src="assets/imgs/svg-icons/mongo.svg" alt="MongoDB" />
          <img src="assets/imgs/svg-icons/prisma.svg" alt="Prisma" />
          <img src="assets/imgs/svg-icons/pinecone.svg" alt="Pinecone" />
          <img src="assets/imgs/svg-icons/planetscale.svg" alt="PlanetScale" />
        </div>
      </li>
      <li>
        <div in:letterSlideIn={{ initDelay: 850 }}>Dev-ops</div>
        <div class="flex-item" in:maskSlideIn={{ delay: 900 }}>
          <img src="assets/imgs/svg-icons/git.svg" alt="GIT" />
          <img src="assets/imgs/svg-icons/docker.svg" alt="Docker" />
          <img src="assets/imgs/svg-icons/kubernetes.svg" alt="Kubernetes" />
          <img src="assets/imgs/svg-icons/aws.svg" alt="AWS" />
          <img src="assets/imgs/svg-icons/jenkins.svg" alt="Jenkins" />
          <img src="assets/imgs/svg-icons/rancher.svg" alt="Rancher" />
          <img
            src="assets/imgs/svg-icons/gcp.svg"
            alt="Google Cloud Platform"
          />
        </div>
      </li>
      <li>
        <div in:letterSlideIn={{ initDelay: 950 }}>Creative Design</div>
        <div class="flex-item" in:maskSlideIn={{ delay: 1000 }}>
          <img src="assets/imgs/svg-icons/figma.svg" alt="figma" />
          <img src="assets/imgs/svg-icons/xd.svg" alt="Adobe XD" />
          <img src="assets/imgs/svg-icons/ae.svg" alt="Photoshop" />
          <img src="assets/imgs/svg-icons/illustrator.svg" alt="Photoshop" />
          <img src="assets/imgs/svg-icons/blender.svg" alt="Blender" />
          <img src="assets/imgs/svg-icons/photoshop.svg" alt="Photoshop" />
        </div>
      </li>
      <li>
        <div in:letterSlideIn={{ initDelay: 1050 }}>Other Tools</div>
        <div class="flex-item" in:maskSlideIn={{ delay: 1100 }}>
          <img src="assets/imgs/svg-icons/insomnia.svg" alt="Insomnia" />
          <img src="assets/imgs/svg-icons/postman.svg" alt="Postman" />
          <img src="assets/imgs/svg-icons/latex.svg" alt="Latex" />
        </div>
      </li>
    </ul>
    <ul class="list">
      <li class="list-title">
        <div in:letterSlideIn={{ initDelay: 400 }}>experience</div>
      </li>
      <li>
        <div in:letterSlideIn={{ initDelay: 550 }}>
          Founding Frontend Developer, Scrollify
        </div>
      </li>
      <li>
        <div in:letterSlideIn={{ initDelay: 600 }}>
          Research Assistant for Dr. Kamaljeet Sanghera, George Mason University
        </div>
      </li>
      <li>
        <div in:letterSlideIn={{ initDelay: 650 }}>
          Research Assistant for Dr. Mingkui Wei,<br /> George Mason University
        </div>
      </li>
      <li>
        <div in:letterSlideIn={{ initDelay: 700 }}>
          Frontend Developer, Gloway InfraTech
        </div>
      </li>
    </ul>
  {/await}
</div>

<style lang="sass">

  @import "../consts.sass"
  @include textStyles()
  
  #content-container.about
    display: flex
    flex-direction: row
    justify-content: space-between
    overflow: hidden
    padding: 0 5vw
    margin-top: 40vh
    position: relative
    padding-bottom: 5vh
  
    .profile-image
      width: 55%
      overflow: hidden
      margin-top: -40vh
      position: relative
  
      img
        height: 80%
        width: 90%
        border-radius: 0.5vh
        object-fit: cover
  
    .content-wrapper
      box-sizing: border-box
      width: 50%
      height: 100%
      margin: 0 2vw
      padding-right: 4vw
      display: flex
      flex-direction: column
      justify-content: center
      margin-top: 5vh
      box-sizing: border-box
      z-index: 2
  
      @media only screen and (max-width: 950px)
        &
          width: 80%
  
          h1
            font-size: 25vw !important
  
      h1
        font-size: 20vh
        font-weight: 400
  
      .paragraph
        margin-top: 10vh
        margin-left: 13vw
        position: relative
        width: 60%
        line-height: 1.5rem
  
        @media only screen and (max-width: 750px)
          &
            width: 100%
            margin-left: 5vw
  
        &::before
          content: ""
          position: absolute
          height: 1px
          width: 10vw
          right: 115%
          top: 15%
          background-color: white
          
  
      .social-button-wrapper
        font-size: 3vh
        margin-left: 13vw
        margin-top: 4vh
        display: inline-block
  
        & :global(*:not(:last-child))
          margin-right: 2vw
  
        @media only screen and (max-width: 750px)
          &
            margin-left: 5vw
  
  
    @media only screen and (max-width: 950px)
      .profile-image
        display: none
  
  .horizontal-flex
    display: flex
    flex-direction: row
    justify-content: space-between
    padding: 0 13vw
    margin-top: 12vh
    width: 100%
    box-sizing: border-box
  
    @media only screen and (max-width: 1080px)
      flex-direction: column
      padding: 0 8vw
  
    .list
      list-style-type: none
      text-align: left
      width: 45%
  
      @media only screen and (max-width: 1080px)
        margin-top: 10vh
  
      li.list-title
        letter-spacing: 0.6vh
        font-size: 2.3vh
        font-weight: bold
  
      li
        font-family: $font
        text-transform: uppercase
        font-size: 2vh
        letter-spacing: 0.5vh
        padding: 2vh 0
        border-bottom: 1px solid #444
        display: flex
        flex-wrap: wrap
        flex-direction: row
        justify-content: space-between
        align-items: center
        column-gap: 10vw
        row-gap: 3vh
  
        img
          height: 2.3vh

</style>
