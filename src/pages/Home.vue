<template>
  <div>
    <HelloWorld msg="HelloWorld" />
    <Button>This One is Button Too</Button>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld'
import Button from '@/components/Button'

export default {
  name: "Home",
  components: {
    HelloWorld,
    Button
  }
}
</script>

