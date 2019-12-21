<template>
	<div class="field">
		<label class="label" :for="id">{{ label }}</label>
		<input class="input" :type="type" :aria-label="label"
		       :name="id" :id="id" :placeholder="placeholder"
		       v-model="inputValue" :autocomplete="autocomplete"/>
		<button v-if="hasButtonSlot" class="input-button" @click="$emit('onButtonClick')">
			<slot name="button"/>
		</button>
	</div>
</template>

<script>
export default {
	name: "VInputField",
	props: {
		label: {type: String},
		placeholder: {type: String},
		type: {
			type: String,
			required: true
		},
		id: {
			type: String,
			required: true
		},
		value: {type: String},
		autocomplete: {type: String}
	},
	data() {
		return {
			inputValue: this.value
		}
	},
	computed: {
		// https://forum.vuejs.org/t/check-if-components-slot-is-empty/6015/4
		hasButtonSlot() {
			return !!this.$slots["button"];
		}
	},
	watch: {
        inputValue() {
            this.$emit("input", this.inputValue);
        }
    }
}
</script>

<style scoped lang="scss">
	$input-bg-color: #F3F3FA;

	.field {
		margin-bottom: $spacer * 1.5;
		position: relative;
	}
	.label {
		padding-left: $spacer * 1.5;
		font-weight: 600;
		font-size: 12px;
		margin-bottom: $spacer / 4;
		display: block;
	}
	.input::placeholder {
		//noinspection CssInvalidPropertyValue
		color: mix(darken(#F3F3FA, 30%), #aaa, 50%);
	}
	.input {
		background-color: $input-bg-color;
		border-radius: $border-radius;
		height: $spacer * 3;
		padding: 0 $spacer * 1.5;
		width: 100%;
		border: none;
		outline: none;
	}
	.input-button {
		position: absolute;
		right: $spacer / 2;
		bottom: 0;
		height: $spacer * 3;
		background-color: $input-bg-color;
		outline: none;
		border: none;
		display: flex;
		align-items: center;
	}
</style>