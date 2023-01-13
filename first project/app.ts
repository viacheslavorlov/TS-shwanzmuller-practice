class ProjectInput {
    templateElement: HTMLTemplateElement;
    parent: HTMLDivElement;
    element: HTMLFormElement;
    titleInputElement: HTMLInputElement;
    descriptionInputElement: HTMLInputElement;
    peopleInputElement: HTMLInputElement;

    constructor(id: string, newParentId: string) {
        this.templateElement = document.getElementById(id)! as HTMLTemplateElement;
        this.parent = document.getElementById(newParentId)! as HTMLDivElement;

        const importedNode = document.importNode(this.templateElement.content, true);
        this.element = importedNode.firstElementChild as HTMLFormElement;
        this.element.id = 'user-input';

        this.titleInputElement = this.element.querySelector('#title')! as HTMLInputElement;
        this.descriptionInputElement = this.element.querySelector('#description')! as HTMLInputElement;
        this.peopleInputElement = this.element.querySelector('#people')! as HTMLInputElement;

        this.configure();
        this.showElement();
    }

   private showElement = () => {
        this.parent.insertAdjacentElement('afterbegin', this.element);
   }

   private submitHandler (e: Event) {
       e.preventDefault();
       console.log({
           title: this.titleInputElement.value,
           description: this.descriptionInputElement.value,
           people: this.peopleInputElement.value
       })
   }

   private configure () {
        this.element.addEventListener('submit', this.submitHandler.bind(this))
   }
}

const showInput = new ProjectInput('project-input', 'app');