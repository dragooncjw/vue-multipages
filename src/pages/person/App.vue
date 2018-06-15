<template>
  <div>
    <headnav></headnav>
    <tablenav></tablenav>
    <b class="line"></b>
  </div>

</template>
<script>
import Headnav from './headnav'
import Tablenav from './tablenav'
export default{
  components: {
    headnav: Headnav,
    tablenav: Tablenav
  },
  name: 'App'
}
</script>
