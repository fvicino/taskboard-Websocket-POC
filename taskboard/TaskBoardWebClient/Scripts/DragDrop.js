function dragHelper()  {
    this.dragObject = null;
    this.mouseOffset = null;
    this.dragObject_zindex = 1000;
    this.onDragMove=null;
    this.onDragStart=null;
    this.onDragStop = null;

    /*
    this.onSelectionStart = null;
    this.onSelectionMove = null;
    this.onSelectionStop = null;
    var selectionStarted = false;
    */

    var _dh = this;
    var dragStarted = false;
    

    this.initialise = function () {
        document.onmousemove = this.mouseMove;
        document.onmouseup = this.mouseUp;
    }

	this.mouseCoords = function (ev){ 
	    if(ev.pageX || ev.pageY){ 
	        return {x:ev.pageX, y:ev.pageY}; 
	    } 
	    return { 
	        x:ev.clientX + document.body.scrollLeft - document.body.clientLeft, 
	        y:ev.clientY + document.body.scrollTop  - document.body.clientTop 
	    }; 
	} 
	 
	this.getMouseOffset = function (target, ev){ 
	    ev = ev || window.event; 
	 
	    var docPos    = this.getPosition(target); 
	    var mousePos  = this.mouseCoords(ev); 
	    return {x:mousePos.x - docPos.x, y:mousePos.y - docPos.y}; 
	} 
	 
	this.getPosition = function (e){ 
	    var left = 0; 
	    var top  = 0; 
	 
	    while (e.offsetParent){ 
	        left += e.offsetLeft; 
	        top  += e.offsetTop; 
	        e     = e.offsetParent; 
	    } 
	 
	    left += e.offsetLeft; 
	    top  += e.offsetTop; 
	 
	    return {x:left, y:top}; 
	}

	this.mouseMove = function (ev) {
	    ev = ev || window.event;
	    var mousePos = _dh.mouseCoords(ev);

	    if (_dh.dragObject) {
	        if (!dragStarted) {
	            dragStarted = true;
	            if (_dh.onDragStart) {
	                _dh.onDragStart();
	            }
	        }
	        _dh.dragObject.style.position = 'absolute';
	        _dh.dragObject.style.top = (mousePos.y - _dh.mouseOffset.y) + 'px';
	        _dh.dragObject.style.left = (mousePos.x - _dh.mouseOffset.x) + 'px';
	    }
        /*
	    else if (_dh.selectionStarted) {
	        var selbox = document.getElementById('selectBox');
	        if (selbox==null || selbox.length == 0) {
	            $(document.body).append(function () {
	                return "<div id='selectBox' class='selectionBox'></div>";
	            });
	            selbox = document.getElementById('selectBox');
	        }

	        if (!selectionStarted) {
	            selectionStarted = true;
	            if (_dh.onSelectionStart) {
	                _dh.onSelectionStart();
	            }
	            selbox.startx = mousePos.x;
	            selbox.starty = mousePos.y;
	        }

	        selbox.style.left = mousePos.x + "px";
	        selbox.style.top = mousePos.y + "px";
	        selbox.style.display = "block";
	    }

	    if (_dh.onSelectionMove) {
	        _dh.onSelectionMove();
	    } else 
        */

        if (_dh.onDragMove) {
	        _dh.onDragMove(ev);
	    }

	    return true;
	}


	this.mouseUp = function () {

	    if (_dh.dragObject && dragStarted) {
	        if (_dh.onDragStop) {
	            _dh.onDragStop();
	        }
	    }
        /*
	    else if (_dh.selectionStarted && selectionStarted) {
	        var selbox = document.getElementById('selectBox');
	        if (_dh.onSelectionStop) {
	            _dh.onSelectionStop();
	        }
	        selbox.endx = selbox.style.left + selbox.style.width;
	        selbox.endy = selbox.style.top + selbox.style.height;
	        selbox.style.display = "None";
	    }

	    selectionStarted = false;
        */

	    dragStarted = false;
	    _dh.dragObject = null;
	}

	this.makeDraggable = function (item) {
	    if (!item) return;
	    item.locked = false;
	    item.onmousedown = function (ev) {
	        if (this.locked) return;
	        _dh.dragObject = this;
	        _dh.mouseOffset = _dh.getMouseOffset(this, ev);
	        return false;
	    }
	}

    /*
	this.setSelectionSurface = function (elementName) {
	    if (!elementName) return;
        document.getElementById(elementName).onmousedown = function (ev) {
	        _dh.selectionStarted = true;
	        return false;
	    }
	}
    */

}