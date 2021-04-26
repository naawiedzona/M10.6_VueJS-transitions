<template>
  <div v-if="showModal">
    <transition name="fade">
    <ModalBootstrap :change1="change1">
        <template v-slot:slot-header>
              <h5 class="modal-title" id="exampleModalLabel">MoneyExchange</h5>
        </template>

          <template v-slot:slot-body>
              <h4>Money Exchange</h4>
            <input type="text" autofocus required v-model.number="change1">
            
        </template>

          <template v-slot:slot-footer>
          <button type="button" class="btn btn-outline-primary" @click="ToggleModal2">Accept</button>
        </template>
    </ModalBootstrap>
    </transition>
  </div>
  <div v-else>
            <!-- Button trigger modal -->
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" @click="ToggleModal">
    Exchange your money
    </button>
    <div class="mensajeFinal" v-if="isClosed">Money exchange done</div>
  </div>
  
</template>

<script src="../scripts/padre.js"></script>
<style src="../styles/padre.css" scoped></style>