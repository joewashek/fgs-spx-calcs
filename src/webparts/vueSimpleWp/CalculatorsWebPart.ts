import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';
import { SPComponentLoader } from '@microsoft/sp-loader';

import * as strings from 'CalculatorsWebPartStrings';

export interface ICalculatorsWebPartProps {
  description: string;
}

import Vue from 'vue';

import './plugins/vuetify.js';

import MainComponent from './components/Main.vue';

export default class VueSimpleWpWebPart extends BaseClientSideWebPart<ICalculatorsWebPartProps> {

  protected onInit(): Promise<void> {
    SPComponentLoader.loadCss('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons');
    return super.onInit();
  }

  public render(): void {
    const id: string = `wp-${this.instanceId}`;
    this.domElement.innerHTML = `<div id="${id}"></div>`;

    let el = new Vue({
      el: `#${id}`,
      render: h => h(MainComponent,{
        props:{
          description: this.properties.description
        }
      })
    });
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
