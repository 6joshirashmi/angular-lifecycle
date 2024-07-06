A component instance has a lifecycle that starts when Angular instantiates the component class and renders the component view along with its child views. The lifecycle continues with change detection, as Angular checks to see when data-bound properties change, and updates both the view and the component instance as needed. The lifecycle ends when Angular destroys the component instance and removes its rendered template from the DOM. Directives have a similar lifecycle, as Angular creates, updates, and destroys instances in the course of execution.
Respond to events in the lifecycle of a component or directive by implementing one or more of the lifecycle hook interfaces in the Angular core library. The hooks give you the opportunity to act on a component or directive instance at the appropriate moment, as Angular creates, updates, or destroys that instance.
Each interface defines the prototype for a single hook method, whose name is the interface name prefixed with ng. For example, the OnInit interface has a hook method named ngOnInit()
After your application instantiates a component or directive by calling its constructor, Angular calls the hook methods you have implemented at the appropriate point in the lifecycle of that instance.


HOOK METHOD	PURPOSE	TIMING
ngOnChanges()	Respond when Angular sets or resets data-bound input properties. The method receives a SimpleChanges object of current and previous property values.
NOTE:
This happens frequently, so any operation you perform here impacts performance significantly.
See details in Using change detection hooks in this document.	Called before ngOnInit() (if the component has bound inputs) and whenever one or more data-bound input properties change.
NOTE:
If your component has no inputs or you use it without providing any inputs, the framework will not call ngOnChanges().


ngOnInit()	Initialize the directive or component after Angular first displays the data-bound properties and sets the directive or component's input properties.Called once, after the first ngOnChanges(). ngOnInit() is still called even when ngOnChanges() is not (which is the case when there are no template-bound inputs).


ngDoCheck()	Detect and act upon changes that Angular can't or won't detect on its own. 	Called immediately after ngOnChanges() on every change detection run, and immediately after ngOnInit() on the first run.


ngAfterContentInit()	Respond after Angular projects external content into the component's view, or into the view that a directive is in. Called once after the first ngDoCheck().

ngAfterContentChecked()	Respond after Angular checks the content projected into the directive or component.
Called after ngAfterContentInit() and every subsequent ngDoCheck().

ngAfterViewInit()	Respond after Angular initializes the component's views and child views, or the view that contains the directive.	Called once after the first ngAfterContentChecked().

ngAfterViewChecked()	Respond after Angular checks the component's views and child views, or the view that contains the directive.	Called after the ngAfterViewInit() and every subsequent ngAfterContentChecked().

ngOnDestroy()	Cleanup just before Angular destroys the directive or component. Unsubscribe Observables and detach event handlers to avoid memory leaks. 	Called immediately before Angular destroys the directive or compone.





![alt text](image-1.png)
![alt text](image.png)


ngOnChanges():- ngOnChanges called before ngOnInit() and whenever one/more data-bound input properties change.
It means, whenever any input properties changed than the code under this function will be triggered.

ngOnChange(changes: SimpleChanges){
console.log(“ngOnChange running”);
console.log(changes);
}

ngOnInit():- ngOnInit is there to give us a signal that Angular has finished initializing the component and now we can perform our needed operations.
Therefore, I consider it as one of the important hooks from a list of Angular lifecycle hooks and very useful, as well.

ngOnInit(){
console.log(“ngOnInit running”);
}

ngDoCheck():- ngDoCheck is known as a detector because it’s called whenever any changes during the app execution happened.
Also, it detects the changes and angular doesn’t able to detect those explicit changes.
In addition, it’s called immediately after ngOnChange and ngOnInit.

ngDoCheck(){
console.log(“ngDoCheck running”);
}

ngAfterContentInit():- ngAfterContentInit, as the name suggested, responds when the angular app projects content into the component’s view and the view is ready.
It is called once after the first ngDoCheck().
It is also known as a component-only hook.

ngAfterContentInit(){
console.log(“ngAfterContentInit running”);
}

ngAfterContentChecked():- ngAfterContentChecked, as its name suggested respond after the app checks the content actually projected into the component.
It called after ngAfterContentInit and every subsequent check.

ngAfterContentChecked(){
console.log(“ngAfterContentChecked running”);
}

ngAfterViewInit():- ngAfterViewInit, responds after app initialized and all the views of component has been ready.
It called once after the first ngAfterContentChecked.

ngAfterViewInit(){
console.log(“ngAfterViewInit running”);
}

ngAfterViewChecked():- ngAfterViewChecked, responds after app checks all the parent and child views of components.
It called after the ngAfterViewInit and every subsequent call of ngAfterContentChecked

ngAfterViewChecked(){
console.log(“ngAfterViewChecked running”);
}

ngDestroy():- The ngDestory, as its name suggested, will use to do clean-up just before the angular app destroys everything.
Furthermore, it will detach the events, unsubscribe the Observables, etc to avoid any memory leaks.
It is called just before the angular app destroys everything like the directive and components.

ngDestroy(){
console.log(“ngDestroy running”);
}
