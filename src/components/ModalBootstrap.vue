<template>
    <div class="modalBootstrap">
      <!-- Modal -->
      <div class="modal appear" tabindex="-1">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <slot name="slot-header"></slot>
            </div>
            <div class="modal-body">
              <slot name="slot-body" v-bind="ChangeNumber(change1)" ></slot>
              <p id="texto-modal">The change of {{ euros }}€ in dolars is {{ euros | changeMoney }}$ </p>
            </div>
            <div class="modal-footer">
              <slot name="slot-footer"></slot>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
<script src="../scripts/modal-bootstrap.js" scoped></script>
<style src="../styles/modal-bootstrap.css" scoped></style>