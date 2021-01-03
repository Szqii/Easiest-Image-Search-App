<template>
  <div class="myContainer">
    <h1 class="text-center mt-5">{{ title }}</h1>
    <div class="form">
      <form @submit.prevent="formSubmit()">
        <input
          type="text"
          name="name"
          class="question"
          id="name"
          required
          autocomplete="off"
          v-model="searchTerm"
        />
        <label for="name"
          ><span
            ><strong>Search something like kittens, puppies etc.</strong></span
          ></label
        >
        <button class="btn btn-outline-primary btn-lg" type="submit">
          Search
        </button>
      </form>
    </div>

    <div class="images">
      <a
        :href="images[index].urls.small"
        v-for="(image, index) in images"
        :key="image.id"
        :aria-label="image.id"
        target="_bla"
      >
        <img :src="images[index].urls.small" />
      </a>
    </div>
  </div>
</template>

<script>
import API from "./API";

export default {
  name: "App",
  data() {
    return {
      title: "Easiest Image Search App",
      searchTerm: "",
      images: [],
    };
  },
  methods: {
    formSubmit() {
      this.images = [];
      API.search(this.searchTerm).then((images) => {
        this.images = images;
        if (this.images.length == 0) {
          alert("Not found.");
        }
        this.searchTerm = "";
      });
    },
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Kanit:wght@400;700&display=swap");
* {
  font-family: "Kanit", sans-serif !important;
}
body {
  width: 100%;
  background: rgb(254, 221, 175);
  background: linear-gradient(
    90deg,
    rgba(254, 221, 175, 1) 0%,
    rgba(253, 203, 194, 1) 35%,
    rgba(229, 60, 55, 1) 100%
  );
  margin: 2rem auto 0 auto;
}
.myContainer {
  display: flex;
  flex-direction: column;
  padding: 1rem;
  &:last-child {
    align-items: center;
    justify-content: center;
  }
  .form {
    margin-left: 25%;
    label {
      margin-bottom: 30px;
    }
  }
  .desc {
    margin-top: 10px;
    font-size: 24px;
    padding: 1rem;
    span {
      text-align: end;
      margin-right: 200px;
    }
  }
  .images {
    margin-top: 10px;
    flex-wrap: wrap;
    padding: 0 20em;
    column-count: 3;
  }
  button {
    width: 10%;
  }
}

h1 {
  margin-bottom: 100px;
}

img {
  margin: 2px;
}

            /* CUSTOM SEARCH BAR*/
input,
span,
label,
textarea {
  display: block;
  padding: 5px;
  border: none;
  font-size: 22px;
}

textarea:focus,
input:focus {
  outline: 0;
}

// TRANSPARENT INPUT
input.question,
textarea.question {
  font-size: 24px;
  font-weight: 300;
  border-radius: 3px;
  margin: 0;
  border: none;
  width: 80%;
  background: rgba(0, 0, 0, 0);
  transition: padding-top 0.2s ease, margin-top 0.2s ease;
  overflow-x: hidden; /* Hack to make "rows" attribute apply in Firefox. */
}

// PLACEHOLDER
input.question + label,
textarea.question + label {
  display: block;
  position: relative;
  white-space: nowrap;
  padding: 0;
  margin: 0;
  width: 10%;
  border-top: 1px solid black;
  -webkit-transition: width 0.4s ease;
  transition: width 0.4s ease;
  height: 0px;
}

// MAKING LONGER ON FOCUS
input.question:focus + label,
textarea.question:focus + label {
  width: 80%;
}

// MOVE PLACEHOLDER TO TOP ON FOCUS
input.question:focus + label > span,
input.question:valid + label > span {
  top: -100px;
  font-size: 22px;
  color: black;
}

input.question + label > span,
textarea.question + label > span {
  font-weight: 300;
  margin: 0;
  position: absolute;
  color: #000;
  font-size: 24px;
  top: -66px;
  left: 0px;
  z-index: -1;
  -webkit-transition: top 0.2s ease, font-size 0.2s ease, color 0.2s ease;
  transition: top 0.2s ease, font-size 0.2s ease, color 0.2s ease;
}

@-webkit-keyframes appear {
  100% {
    opacity: 1;
  }
}

@keyframes appear {
  100% {
    opacity: 1;
  }
}
</style>
