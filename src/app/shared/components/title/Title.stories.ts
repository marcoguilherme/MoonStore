import { Story, Meta } from '@storybook/angular/types-6-0';
import { TitleComponent } from './title.component';
import { TitleContentDirective, TitleDirective } from './title.directive';

export default {
	title: 'Components/Shared/Title',
	component: TitleComponent,
	decorators: [],
	parameters: {
},
    argTypes: {
        color: {
            control: {
                type: 'select',
                options: ['primary', 'secondary']
            }
        }
    }
} as Meta;

const Template: Story = (args) => ({
	moduleMetadata: {
		declarations: [TitleComponent, TitleDirective, TitleContentDirective]
	},
	props: {
		color: args.color
	},
	template: `
		<app-title [color]='color'>
			<app-title-content>
					<h1>Meu titulo é <strong>Forte</strong></h1>
			</app-title-content>
		</app-title>
	`
});

export const Default = Template.bind({});
Default.args = {
	color: 'primary'
};
