<script setup>
const { abc, def } = defineProps({
  abc: String,
  def: Object
});
console.log(abc);
console.log(def);
</script>