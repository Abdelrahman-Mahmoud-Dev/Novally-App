<template>
  <div class="contact_form">
    <form action="#" method="post" id="main_contact_form" novalidate>
      <b-row>
        <b-col col="12">
          <div id="success_fail_info"></div>
        </b-col>

        <slot></slot>
      </b-row>
    </form>
  </div>
</template>