import { Component } from '@angular/core';
import { OrgItemConfig, Enabled, PageFitMode, OrientationType, VerticalAlignmentType, HorizontalAlignmentType, ChildrenPlacementType, Visibility, SelectionPathMode, GroupByType, ConnectorType, ElbowType, LineType, TextOrientationType, PlacementType } from 'ngx-basic-primitives';

@Component({
  selector: 'app-labels',
  templateUrl: './labels.component.html',
  styleUrls: ['./sample.css']
})
export class LabelsComponent {
  PageFitMode = PageFitMode;
  Enabled = Enabled;
  OrientationType = OrientationType;
  VerticalAlignmentType = VerticalAlignmentType;
  HorizontalAlignmentType = HorizontalAlignmentType;
  ChildrenPlacementType = ChildrenPlacementType;
  Visibility = Visibility;
  SelectionPathMode = SelectionPathMode;
  GroupByType = GroupByType;
  ConnectorType = ConnectorType;
  ElbowType = ElbowType;
  LineType = LineType;
  TextOrientationType = TextOrientationType;
  PlacementType = PlacementType;
  
  items = [
    new OrgItemConfig({ id: 0, parent: null, description: "Chief Executive Officer (CEO)", image: "/assets/photos/q.png", itemTitleColor: "#4169e1",title: "David Dalton", label: "David Dalton" }),
    new OrgItemConfig({ id: 1, parent: 0, description: "Co-Presidents, Platform Products & Services Division", image: "/assets/photos/w.png", title: "Jeanna White", label: "Jeanna White" }),
    new OrgItemConfig({ id: 2, parent: 1, description: "Sr. VP, Server & Tools Division", image: "/assets/photos/e.png", title: "James Holt", label: "James Holt" }),
    new OrgItemConfig({ id: 3, parent: 2, description: "VP, Server & Tools Marketing and Solutions", image: "/assets/photos/r.png", title: "Thomas Williams", label: "Thomas Williams" }),
    new OrgItemConfig({ id: 4, parent: 2, description: "VP, Software & Enterprise Management Division", image: "/assets/photos/g.png", title: "Sara Kemp", label: "Sara Kemp" }),
    new OrgItemConfig({ id: 5, parent: 2, description: "Sr. VP, Software Server System", image: "/assets/photos/x.png", title: "George Duong", label: "George Duong" }),
    new OrgItemConfig({ id: 6, parent: 2, description: "VP, Developer Division", image: "/assets/photos/n.png", title: "Ashley Rue", label: "Ashley Rue" }),
    new OrgItemConfig({ id: 7, parent: 2, description: "VP, Enterprise Access and Security Products Division (EASP)", image: "/assets/photos/i.png", title: "Bonnie Wedel", label: "Bonnie Wedel" }),
    new OrgItemConfig({ id: 8, parent: 2, description: "GM, Core File Solutions", image: "/assets/photos/p.png", title: "Melissa Houser", label: "Melissa Houser" }),
    new OrgItemConfig({ id: 9, parent: 2, description: "GM, Software Server Solutions Group", image: "/assets/photos/a.png", title: "Abbie Lawson", label: "Abbie Lawson" }),
    new OrgItemConfig({ id: 10, parent: 2, description: "GM, Connected Systems Division", image: "/assets/photos/s.png", title: "Ernest Putnam", label: "Ernest Putnam" }),
    new OrgItemConfig({ id: 11, parent: 1, description: "CFO, Platforms Products & Services", image: "/assets/photos/h.png", title: "Celestina Crum", label: "Celestina Crum" }),
    new OrgItemConfig({ id: 12, parent: 11, description: "GM, Pricing", image: "/assets/photos/j.png", title: "Cindy Turner", label: "Cindy Turner" }),
    new OrgItemConfig({ id: 13, parent: 11, description: "GM, Worldwide Licensing", image: "/assets/photos/k.png", title: "Victoria Sequeira", label: "Victoria Sequeira" }),
    new OrgItemConfig({ id: 14, parent: 11, description: "GM, WW Licensing Solutions", image: "/assets/photos/x.png", title: "Norma Moore", label: "Norma Moore" }),
    new OrgItemConfig({ id: 15, parent: 11, description: "GM, Marketing and Readiness", image: "/assets/photos/c.png", title: "Carlos Cardenas", label: "Carlos Cardenas" }),
    new OrgItemConfig({ id: 16, parent: 1, description: "Sr. VP, Software Core Operating System Division", image: "/assets/photos/v.png", title: "John Green", label: "John Green" }),
    new OrgItemConfig({ id: 17, parent: 16, description: "VP, Core OS Development", image: "/assets/photos/b.png", title: "Richard Morales", label: "Richard Morales" }),
    new OrgItemConfig({ id: 18, parent: 16, description: "VP, Software Networking & Device Technologies", image: "/assets/photos/m.png", title: "Charlotte White", label: "Charlotte White" }),
    new OrgItemConfig({ id: 19, parent: 16, description: "VP, Security Technology Unit (STU)", image: "/assets/photos/y.png", title: "Robert Morgan", label: "Robert Morgan" }),
    new OrgItemConfig({ id: 20, parent: 16, description: "GM, Software Serviceability", image: "/assets/photos/a.png", title: "Ida Benefield", label: "Ida Benefield" }),
    new OrgItemConfig({ id: 21, parent: 16, description: "GM, Core Operating System Test", image: "/assets/photos/d.png", title: "Vada Duhon", label: "Vada Duhon" }),
    new OrgItemConfig({ id: 22, parent: 16, description: "GM, Global Platform Technologies and Services", image: "/assets/photos/f.png", title: "William Loyd", label: "William Loyd" }),
    new OrgItemConfig({ id: 23, parent: 1, description: "Sr. VP, NAME & Personal Services Division", image: "/assets/photos/g.png", title: "Craig Blue", label: "Craig Blue" }),
    new OrgItemConfig({ id: 24, parent: 23, description: "VP, NAME Communications Services and Member Platform", image: "/assets/photos/h.png", title: "Joel Crawford", label: "Joel Crawford" }),
    new OrgItemConfig({ id: 25, parent: 23, description: "VP & CFO, NAME", image: "/assets/photos/o.png", title: "Barbara Lang", label: "Barbara Lang" }),
    new OrgItemConfig({ id: 26, parent: 23, description: "VP, NAME Operations", image: "/assets/photos/d.png", title: "Barbara Faulk", label: "Barbara Faulk" }),
    new OrgItemConfig({ id: 27, parent: 23, description: "VP, NAME Global Sales & Marketing", image: "/assets/photos/z.png", title: "Stewart Williams", label: "Stewart Williams" }),
    new OrgItemConfig({ id: 28, parent: 23, description: "Sr. VP, NAME Information Services & Merchant Platform", image: "/assets/photos/y.png", title: "Robert Lemieux", label: "Robert Lemieux" }),
    new OrgItemConfig({ id: 29, parent: 23, description: "Chief of Staff, NAME", image: "/assets/photos/o.png", title: "Daniel Richmond", label: "Daniel Richmond" }),
    new OrgItemConfig({ id: 30, parent: 1, description: "VP, Developer & Platform Fanatism", image: "/assets/photos/p.png", title: "Allen Wallace", label: "Allen Wallace" }),
    new OrgItemConfig({ id: 31, parent: 30, description: "VP, .ORG Business Development", image: "/assets/photos/a.png", title: "Ben Roberson", label: "Ben Roberson" }),
    new OrgItemConfig({ id: 32, parent: 30, description: "GM, .ORG Platform Strategy", image: "/assets/photos/d.png", title: "Matthew Cole", label: "Matthew Cole" }),
    new OrgItemConfig({ id: 33, parent: 30, description: "GM, Global ISVs", image: "/assets/photos/f.png", title: "Janet Martin", label: "Janet Martin" }),
    new OrgItemConfig({ id: 34, parent: 30, description: "GM, Platform Fanatism", image: "/assets/photos/h.png", title: "Teresa Carter", label: "Teresa Carter" }),
    new OrgItemConfig({ id: 35, parent: 1, description: "Sr. VP, Software Client Business", image: "/assets/photos/j.png", title: "Sally Barnes", label: "Sally Barnes" }),
    new OrgItemConfig({ id: 36, parent: 35, description: "VP, Digital Media Division", image: "/assets/photos/k.png", title: "Elmo Peterson", label: "Elmo Peterson" }),
    new OrgItemConfig({ id: 37, parent: 35, description: "VP, Software Client Core Platform Team", image: "/assets/photos/b.png", title: "Maria Nelson", label: "Maria Nelson" }),
    new OrgItemConfig({ id: 38, parent: 35, description: "VP, Software Online", image: "/assets/photos/w.png", title: "Donna Potts", label: "Donna Potts" }),
    new OrgItemConfig({ id: 39, parent: 35, description: "VP, Software Product Management & Marketing", image: "/assets/photos/r.png", title: "Nick Lambert", label: "Nick Lambert" }),
    new OrgItemConfig({ id: 40, parent: 35, description: "VP Software Client Extended Platforms", image: "/assets/photos/i.png", title: "Daniel Small", label: "Daniel Small" }),
    new OrgItemConfig({ id: 41, parent: 35, description: "CFO, Software Client Business", image: "/assets/photos/k.png", title: "Donnie Gonzalez", label: "Donnie Gonzalez" }),
    new OrgItemConfig({ id: 42, parent: 35, description: "Chief of Staff, Software Client",  image: "/assets/photos/z.png", title: "Lori Anderson", label: "Lori Anderson" }),
    new OrgItemConfig({ id: 43, parent: 1, description: "Sr. Distinguished Engineer, Software Base Team",  image: "/assets/photos/x.png", title: "Linda Wong", label: "Linda Wong" }),
    new OrgItemConfig({ id: 44, parent: 1, description: "GM, Platforms Business Management", image: "/assets/photos/c.png", title: "Bonnie Valdez", label: "Bonnie Valdez" }),
    new OrgItemConfig({ id: 45, parent: 0, description: "President, Entertainment & Devices Division", image: "/assets/photos/v.png", title: "Joseph Gipson", label: "Joseph Gipson" }),
    new OrgItemConfig({ id: 46, parent: 45, description: "VP, Media",  image: "/assets/photos/b.png",  title: "Christine Waugh", label: "Christine Waugh" }),
    new OrgItemConfig({ id: 47, parent: 46, description: "GM, Media",  image: "/assets/photos/n.png",  title: "John Burris", label: "John Burris" }),
    new OrgItemConfig({ id: 48, parent: 45, description: "CFO & VP, Entertainment",  image: "/assets/photos/m.png",  title: "Ashley Caudill", label: "Ashley Caudill" }),
    new OrgItemConfig({ id: 49, parent: 48, description: "VP, Console Partnerships",  image: "/assets/photos/q.png",  title: "David Gift", label: "David Gift" }),
    new OrgItemConfig({ id: 50, parent: 48, description: "VP, TV Division",  image: "/assets/photos/w.png",  title: "Patrick Mitchell", label: "Patrick Mitchell" }),
    new OrgItemConfig({ id: 51, parent: 48, description: "Controller, Entertainment & Devices Division",  image: "/assets/photos/u.png",  title: "Fern Booker", label: "Fern Booker" }),
    new OrgItemConfig({ id: 52, parent: 45, description: "VP, Experiences & Design for Gaming and Entertainment",  image: "/assets/photos/i.png",  title: "Stephen Lowe", label: "Stephen Lowe" }),
    new OrgItemConfig({ id: 53, parent: 52, description: "VP, Gaming and Console Platform Group",  image: "/assets/photos/o.png",  title: "Ellen Murphy", label: "Ellen Murphy" }),
    new OrgItemConfig({ id: 54, parent: 52, description: "GM, Console Live Service Group",  image: "/assets/photos/s.png",  title: "Delores Coffman", label: "Delores Coffman" }),
    new OrgItemConfig({ id: 55, parent: 45, description: "VP, Retail Sales & Marketing",  image: "/assets/photos/d.png",  title: "Jerry Spurlock", label: "Jerry Spurlock" }),
    new OrgItemConfig({ id: 56, parent: 55, description: "VP, Entertainment & Devices",  image: "/assets/photos/f.png",  title: "Chris Watts", label: "Chris Watts" }),
    new OrgItemConfig({ id: 57, parent: 55, description: "VP, Retail Sales & Marketing",  image: "/assets/photos/g.png",  title: "David Kelley", label: "David Kelley" }),
    new OrgItemConfig({ id: 58, parent: 55, description: "GM, Entertainment & Devices Division",  image: "/assets/photos/h.png",  title: "Edgar Walkup", label: "Edgar Walkup" }),
    new OrgItemConfig({ id: 59, parent: 45, description: "Sr. VP, Mobile & Embedded Devices & Communications Sector",  image: "/assets/photos/j.png",  title: "Thomas Davidson", label: "Thomas Davidson" }),
    new OrgItemConfig({ id: 60, parent: 59, description: "VP, Communications Sector",  image: "/assets/photos/k.png",  title: "Ignacio Widmer", label: "Ignacio Widmer" }),
    new OrgItemConfig({ id: 61, parent: 59, description: "VP, Mobile and Embedded Device Marketing",  image: "/assets/photos/q.png",  title: "Larry Bell", label: "Larry Bell" }),
    new OrgItemConfig({ id: 62, parent: 59, description: "VP, Devices",  image: "/assets/photos/r.png",  title: "Randy Shields", label: "Randy Shields" }),
    new OrgItemConfig({ id: 63, parent: 59, description: "CFO, Mobile & Embedded Devices & Communications Sector Division",  image: "/assets/photos/p.png",  title: "Sarah Haynes", label: "Sarah Haynes" }),
    new OrgItemConfig({ id: 64, parent: 45, description: "VP, Interactive Entertainment Business",  image: "/assets/photos/a.png",  title: "Bettyann Phillips", label: "Bettyann Phillips" }),
    new OrgItemConfig({ id: 65, parent: 64, description: "GM, Global Marketing",  image: "/assets/photos/s.png",  title: "Sara Ceballos", label: "Sara Ceballos" }),
    new OrgItemConfig({ id: 66, parent: 64, description: "GM, New Media & Franchise Development",  image: "/assets/photos/d.png",  title: "Lucius McDuffy", label: "Lucius McDuffy" }),
    new OrgItemConfig({ id: 67, parent: 64, description: "GM, Name Game Studios",  image: "/assets/photos/f.png",  title: "Nicole McGahey", label: "Nicole McGahey" }),
    new OrgItemConfig({ id: 68, parent: 64, description: "GM, Entertainment & Devices",  image: "/assets/photos/l.png",  title: "Ricky Bronk", label: "Ricky Bronk" }),
    new OrgItemConfig({ id: 69, parent: 45, description: "VP, Consumer Productivity eXperierences Division",  image: "/assets/photos/z.png",  title: "Doris Ponte", label: "Doris Ponte" }),
    new OrgItemConfig({ id: 70, parent: 69, description: "GM, North America Operations",  image: "/assets/photos/x.png",  title: "Samuel Tibbs", label: "Samuel Tibbs" }),
    new OrgItemConfig({ id: 71, parent: 69, description: "GM, Entertainment & Devices Localization and Shared Services",  image: "/assets/photos/b.png",  title: "James Reder", label: "James Reder" }),
    new OrgItemConfig({ id: 72, parent: 69, description: "GM, Consumer Software",  image: "/assets/photos/n.png",  title: "Mary McLendon", label: "Mary McLendon" }),
    new OrgItemConfig({ id: 73, parent: 69, description: "GM, Macintosh Business Unit",  image: "/assets/photos/q.png",  title: "Versie Allen", label: "Versie Allen" }),
    new OrgItemConfig({ id: 74, parent: 69, description: "GM, Hardware",  image: "/assets/photos/w.png",  title: "Diann Williamson", label: "Diann Williamson" }),
    new OrgItemConfig({ id: 75, parent: 0, description: "Sr. VP, General Counsel & Secretary",  image: "/assets/photos/e.png",  title: "Florence Butts", label: "Florence Butts" }),
    new OrgItemConfig({ id: 76, parent: 75, description: "VP & Deputy General Counsel, Platforms Products & Services",  image: "/assets/photos/r.png",  title: "David Hedberg", label: "David Hedberg" }),
    new OrgItemConfig({ id: 77, parent: 75, description: "VP & Deputy General Counsel, IP & Licensing",  image: "/assets/photos/t.png",  title: "Bruce Clift", label: "Bruce Clift" }),
    new OrgItemConfig({ id: 78, parent: 77, description: "GM, Business Development",  image: "/assets/photos/y.png",  title: "Josephine Meister", label: "Josephine Meister" }),
    new OrgItemConfig({ id: 79, parent: 77, description: "GM, Patents & IP",  image: "/assets/photos/u.png",  title: "Brandon Armstrong", label: "Brandon Armstrong" }),
    new OrgItemConfig({ id: 80, parent: 77, description: "GM, Corporate Standards",  image: "/assets/photos/i.png",  title: "Berta Rucker", label: "Berta Rucker" }),
    new OrgItemConfig({ id: 81, parent: 75, description: "VP, & Deputy General Counsel",  image: "/assets/photos/o.png",  title: "Arthur Buck", label: "Arthur Buck" }),
    new OrgItemConfig({ id: 82, parent: 75, description: "Deputy General Counsel, Antitrust",  image: "/assets/photos/p.png",  title: "James Turner", label: "James Turner" }),
    new OrgItemConfig({ id: 83, parent: 75, description: "VP & Deputy General Counsel, Business Division",  image: "/assets/photos/a.png",  title: "Michelle Harr", label: "Michelle Harr" }),
    new OrgItemConfig({ id: 84, parent: 75, description: "Deputy General Counsel, Office of Legal Compliance",  image: "/assets/photos/s.png",  title: "Demetrice Kenney", label: "Demetrice Kenney" }),
    new OrgItemConfig({ id: 85, parent: 75, description: "VP, & Deputy General Counsel",  image: "/assets/photos/d.png",  title: "Mark Barreto", label: "Mark Barreto" }),
    new OrgItemConfig({ id: 86, parent: 75, description: "Deputy General Counsel, Law & Corporate Affairs (LCA) Operations",  image: "/assets/photos/f.png",  title: "Jennifer Hurtt", label: "Jennifer Hurtt" }),
    new OrgItemConfig({ id: 87, parent: 75, description: "VP & Deputy General Counsel, Worldwide Sales",  image: "/assets/photos/g.png",  title: "Christopher Mauro", label: "Christopher Mauro" }),
    new OrgItemConfig({ id: 88, parent: 75, description: "VP & Deputy General Counsel, Global Corporate Affairs",  image: "/assets/photos/h.png",  title: "Paul McKissick", label: "Paul McKissick" }),
    new OrgItemConfig({ id: 89, parent: 75, description: "VP & Deputy General Counsel, Entertainment & Devices",  image: "/assets/photos/j.png",  title: "Jane Hammond", label: "Jane Hammond" })
  ]
}
