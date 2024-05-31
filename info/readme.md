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


ngDoCheck()	Detect and act upon changes that Angular can't or won't detect on its own. See details and example in Defining custom change detection in this document.	Called immediately after ngOnChanges() on every change detection run, and immediately after ngOnInit() on the first run.


ngAfterContentInit()	Respond after Angular projects external content into the component's view, or into the view that a directive is in. Called once after the first ngDoCheck().

ngAfterContentChecked()	Respond after Angular checks the content projected into the directive or component.
Called after ngAfterContentInit() and every subsequent ngDoCheck().

ngAfterViewInit()	Respond after Angular initializes the component's views and child views, or the view that contains the directive.	Called once after the first ngAfterContentChecked().

ngAfterViewChecked()	Respond after Angular checks the component's views and child views, or the view that contains the directive.	Called after the ngAfterViewInit() and every subsequent ngAfterContentChecked().

ngOnDestroy()	Cleanup just before Angular destroys the directive or component. Unsubscribe Observables and detach event handlers to avoid memory leaks. 	Called immediately before Angular destroys the directive or compone.






















