//customerlist.stories.js
import CustomerList from "../src/components/CustomerList";
import {action} from "@storybook/addon-actions";

export default {
    title: 'Customer List',
    excludeStories: /.*Data$/
}

export const actionsData = {
    action: action('clicked in storybook')
}
const CustomerListTemplate = `<customer-list :active="active" @click="action"></customer-list>`;

export const DefaultListActive = () => ({
    components: {CustomerList},
    template: CustomerListTemplate,
    data() {
        return {
            active: true
        }
    },
    methods: actionsData
});
export const DefaultListInactive = () => ({
    components: {CustomerList},
    template: CustomerListTemplate,
    data() {
        return {
            active: false
        }
    },
    methods: actionsData
})
