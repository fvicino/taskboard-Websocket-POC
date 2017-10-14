using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Xml;

namespace TaskBoard.Common
{
    /*
    public class TaskStickyNote
    {
        private string _title;
        private string _assignedTo;
        public int ID;
        public string AssignedToDisplay;
        public string RemainingTime;
        public string Project;
        public string X;
        public string Y;
        public string Transform;
        public string EditURL;
        public string State;
        public List<string> RemainingHoursHistory=new List<string>();
        public string OriginalEstimate;


        public TaskStickyNote() { }

        public TaskStickyNote(WorkItem wi) : this(wi, null) { }

        public TaskStickyNote(WorkItem wi, StickyNoteViewState viewState)
        {
            ID = wi.Id;
            Title = wi.Title;
            var ass = wi.Fields["System.AssignedTo"].Value;
            AssignedTo = ass != null ? ass.ToString() : "";
            var rem = wi.Fields["Microsoft.VSTS.Scheduling.RemainingWork"].Value;
            RemainingTime = rem != null ? rem.ToString() : "";
            Project = wi.Project.Name;
            State = wi.State;

            if (viewState != null)
            {
                X = viewState.X;
                Y = viewState.Y;
                Transform = viewState.Transform;
            }

            var oe = wi.Fields["Original Estimate"].Value;
            OriginalEstimate = oe == null ? string.Empty : oe.ToString();

            int last = wi.Revisions.Count-1;
            string lastvalue="", newvalue="";
            for (int i = last; i > 0 && RemainingHoursHistory.Count < 4 ; i--) 
            {
                var val = wi.Revisions[i].Fields["Remaining Work"].Value;
                newvalue = val == null ? string.Empty : val.ToString();
                if (newvalue != lastvalue)
                {
                    RemainingHoursHistory.Add(newvalue);
                }
                lastvalue = newvalue;
            }

        }

        public string Title
        {
            get { return _title; }
            set
            {
                if (value.Length > 40)
                {
                    _title = value.Substring(0, 40);
                }
                else
                {
                    _title = value;
                }
            }
        }

        public string AssignedTo
        {
            get { return _assignedTo; }
            set
            {
                _assignedTo = value;
                var i = _assignedTo.IndexOf("(");
                if (i > 0)
                {
                    AssignedToDisplay = _assignedTo.Substring(0, i);
                }
                else
                {
                    AssignedToDisplay = _assignedTo;
                }
            }
        }

    }
    */
}