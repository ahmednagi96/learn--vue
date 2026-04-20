<script setup>

import { useCounterStore } from '@/stores/CounterStore';
let counter=useCounterStore();
</script>

<template>
     {{ counter.count }}
<br>
<button 
  @click="counter.increment" 
  :disabled="counter.remaining == 0"
  :style="{
    padding: '12px 24px',
    fontSize: '16px',
    fontWeight: '600',
    borderRadius: '12px',
    border: 'none',
    cursor: counter.remaining <= 0 ? 'not-allowed' : 'pointer',
    backgroundColor: counter.remaining <= 0 ? '#e2e8f0' : '#3b82f6',
    color: counter.remaining <= 0 ? '#94a3b8' : '#ffffff',
    boxShadow: counter.remaining <= 0 ? 'none' : '0 4px 6px -1px rgba(59, 130, 246, 0.3)',
    transition: 'all 0.3s ease',
    transform: counter.remaining <= 0 ? 'scale(1)' : 'scale(1)',
    display: 'flex',
    alignItems: 'center',
    gap: '8px'
  }"
>
  Increment
  <span style="background: rgba(0,0,0,0.1); padding: 2px 8px; border-radius: 6px;">
    {{ counter.remaining }}
  </span>
</button></template>