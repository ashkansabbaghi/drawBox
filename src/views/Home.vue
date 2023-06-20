<template>
  <div class="home">
    <h1>object labeling</h1>
    <div
      id="image-wrapper"
      @mousedown="startDrawingBox"
      @mousemove="changeBox"
      @mouseup="stopDrawingBox"
      :style="{ backgroundImage: `url(${img_url})` }"
    >
      <template v-for="(box, i) in boxes" :key="i">
        <Box
          :b-width="box.width"
          :b-height="box.height"
          :b-top="box.top"
          :b-left="box.left"
          isShowBox="true"
        />
      </template>
      <Box
        v-if="drawingBox.active"
        :b-width="drawingBox.width"
        :b-height="drawingBox.height"
        :b-top="drawingBox.top"
        :b-left="drawingBox.left"
      />
    </div>
  </div>
</template>

<script>
import Box from "@/components/Box.vue";
import { pick } from "lodash";

const getCoursorLeft = (e) => {
  // console.log(e.x - e.offsetX);
  let additional = e.pageX - e.layerX;

  // return e.offsetX - 0;
  return e.pageX - additional;
  // return e.x - e.offsetX;
};

const getCoursorTop = (e) => {
  // console.log(e);
  let additional = e.pageY - e.layerY;

  // return e.offsetY - 0;
  // console.log(e);
  // return e.y - (e.y - e.offsetY);
  return e.pageY - additional;
};
export default {
  name: "Home",
  components: {
    Box,
  },
  created() {},

  data: () => ({
    img_url:
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
    drawingBox: {
      active: false,
      top: 0,
      left: 0,
      height: 0,
      width: 0,
    },
    boxes: [],
  }),

  methods: {
    startDrawingBox(e) {
      // console.log(e);
      this.drawingBox = {
        width: 0,
        height: 0,
        top: getCoursorTop(e),
        left: getCoursorLeft(e),
        active: true,
      };
    },
    changeBox(e) {
      // console.log("move");
      if (this.drawingBox.active) {
        this.drawingBox = {
          ...this.drawingBox,
          width: getCoursorLeft(e) - this.drawingBox.left,
          height: getCoursorTop(e) - this.drawingBox.top,
        };
        console.log(this.drawingBox.width, this.drawingBox.height);
      }
    },
    stopDrawingBox() {
      // console.log("stop");
      if (this.drawingBox.active) {
        if (this.drawingBox.width > 5 && this.drawingBox.height > 3) {
          console.log(
            pick(this.drawingBox, ["width", "height", "top", "left"])
          );
          this.boxes.push({
            ...pick(this.drawingBox, ["width", "height", "top", "left"]),
          });
        }
        this.drawingBox = {
          active: false,
          top: 0,
          left: 0,
          height: 0,
          width: 0,
        };
        console.log(this.boxes);
      }
    },
  },
};
</script>

<style lang="scss"  scoped>
#image-wrapper {
  // position :fixed !important;
  // top :20px;
  margin: auto;
  width: 600px;
  height: 600px;
  background-repeat: round;
  position: relative;
  justify-content: center;
}
</style>