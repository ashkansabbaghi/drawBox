<template>
  <div class="home">
    <div class="container">
      <div class="row">
        <div class="column" v-for="(d, i) in data" :key="i">
          <div class="card card-custom">
            <img :src="d.imageUrl" class="img-custom" alt />
            <div class="card-body" v-if="d.postedBy">
              <a href="#" class="btn btn-primary" v-text="d.postedBy.name"></a>
              <img class="img-avatar" :src="d.postedBy.avatarUrl" alt />
            </div>
            <div class="card-body" v-else>
              <a href="#" class="btn btn-primary">test</a>
              <!-- <img src="d.avatarUrl" alt /> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

// import api from "axios"
export default {
  name: 'Home',
  components: {

  },
  created() {
    // this.getApi()
  },

  methods: {
    // getApi() {
    //   api.get('http://software-interview.abramad.com/api/data')
    //     .then(res => { console.log(res) })
    // }
  },
  data: () => ({
    data:
      [
        {

          "imageUrl": " http://software-interview.abramad.com/images/img1.jpg",
          "targetUrl": null,
          "postedBy": {
            "name": "Alice",
            "avatarUrl": "http://software-interview.abramad.com/avatars/alice.jpg"
          }
        },
        {
          "imageUrl": " http://software-interview.abramad.com/images/img2.jpg",
          "targetUrl": "https://abramad.com",
          "postedBy": null
        },
        {
          "imageUrl": " http://software-interview.abramad.com/images/img3.jpg",
          "targetUrl": "https://systemgroup.net",
          "postedBy": {
            "name": "Charlie",
            "avatarUrl": "http://software-interview.abramad.com/avatars/charlie.jpg"
          }
        },
        {
          "imageUrl": " http://software-interview.abramad.com/images/img4.jpg",
          "targetUrl": null,
          "postedBy": null
        },
        {
          "imageUrl": " http://software-interview.abramad.com/images/img5.jpg",
          "targetUrl": null,
          "postedBy": {
            "name": "Eric",
            "avatarUrl": null
          }
        },
        {
          "imageUrl": " http://software-interview.abramad.com/images/img6.jpg",
          "targetUrl": null,
          "postedBy": {
            "name": "Frantz",
            "avatarUrl": null
          }
        },
        {
          "imageUrl": " http://software-interview.abramad.com/images/img7.jpg",
          "targetUrl": null,
          "postedBy": null
        },
        {
          "imageUrl": " http://software-interview.abramad.com/images/img8.jpg",
          "targetUrl": null,
          "postedBy": {
            "name": "Hollie",
            "avatarUrl": null
          }
        }
      ]
  })
}
</script>

<style lang="scss" >
.card-custom {
  // display: inline-block;
  // flex-direction: row;
  // width: 150px;
  border: none !important;
  border-radius: 10px !important;
}
.img-custom {
  width: 100%;
  border-radius: 10px;
  // margin-top: 8px;
  vertical-align: middle;
  // width: 100%;
}
.flex {
  flex-wrap: wrap;
  padding: 0 4px;
}
.column {
  flex: 25%;
  max-width: 25%;
  padding: 0 4px;
}
.img-avatar {
  width: 40px;
  margin: 5px;
}
</style>