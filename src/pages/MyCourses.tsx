
    import { useState } from 'react';
    import { Star, Clock, BookOpen, Users, Check, X, Trash2, ShoppingCart, User, Search } from 'lucide-react';
    import { Button } from '@/components/ui/button';
    import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
    import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';

    // Types
    interface CartItem {
    id: string;
    title: string;
    price: number;
    type: 'chapter' | 'full';
    subject: string;
    image?: string;
    }

    interface Course {
    id: string;
    title: string;
    subject: 'Physics' | 'Chemistry' | 'Mathematics';
    type: 'chapter' | 'full';
    price: number;
    originalPrice?: number;
    duration: string;
    chapters: number;
    instructor: string;
    rating: number;
    students: number;
    image: string;
    description: string;
    features: string[];
    }

    // Course Data
    const coursesData: Course[] = [
    {
        id: 'phy-mechanics',
        title: 'Mechanics - Motion & Forces',
        subject: 'Physics',
        type: 'chapter',
        price: 599,
        originalPrice: 899,
        duration: '15 hours',
        chapters: 6,
        instructor: 'Dr. Rajesh Sharma',
        rating: 4.8,
        students: 1250,
        image: 'abs',
        description: 'Master the fundamentals of mechanics including kinematics, dynamics, and Newton\'s laws with real-world applications.',
        features: [
        'Interactive problem solving',
        'Real-world applications',
        'Practice questions',
        'Video explanations'
        ]
    },
    {
        id: 'phy-waves',
        title: 'Waves & Oscillations',
        subject: 'Physics',
        type: 'chapter',
        price: 549,
        originalPrice: 799,
        duration: '12 hours',
        chapters: 5,
        instructor: 'Prof. Anita Gupta',
        rating: 4.7,
        students: 980,
        image: 'abs',
        description: 'Comprehensive coverage of wave motion, sound waves, and oscillatory motion with mathematical derivations.',
        features: [
        'Wave equation derivations',
        'Sound wave properties',
        'Oscillation analysis',
        'Practical examples'
        ]
    },
    {
        id: 'phy-full',
        title: 'Complete Physics Course',
        subject: 'Physics',
        type: 'full',
        price: 3999,
        originalPrice: 5999,
        duration: '120 hours',
        chapters: 20,
        instructor: 'Dr. Rajesh Sharma',
        rating: 4.9,
        students: 2100,
        image: 'abs',
        description: 'Complete JEE Physics preparation with all topics covered in depth, including advanced problem-solving techniques.',
        features: [
        'All JEE Physics topics',
        'Advanced problem solving',
        'Mock tests included',
        'Doubt resolution sessions'
        ]
    },
    {
        id: 'chem-organic',
        title: 'Organic Chemistry Basics',
        subject: 'Chemistry',
        type: 'chapter',
        price: 649,
        originalPrice: 949,
        duration: '18 hours',
        chapters: 7,
        instructor: 'Dr. Priya Mehta',
        rating: 4.6,
        students: 890,
        image: 'abs',
        description: 'Foundation course in organic chemistry covering basic concepts, nomenclature, and reaction mechanisms.',
        features: [
        'Reaction mechanisms',
        'Nomenclature mastery',
        'Structural analysis',
        'Practice problems'
        ]
    },
    {
        id: 'chem-full',
        title: 'Complete Chemistry Course',
        subject: 'Chemistry',
        type: 'full',
        price: 4299,
        originalPrice: 6499,
        duration: '140 hours',
        chapters: 25,
        instructor: 'Dr. Priya Mehta',
        rating: 4.8,
        students: 1800,
        image: 'abs',
        description: 'Comprehensive JEE Chemistry preparation covering organic, inorganic, and physical chemistry.',
        features: [
        'All chemistry branches',
        'Laboratory techniques',
        'Industrial applications',
        'Competitive exam focus'
        ]
    },
    {
        id: 'math-calculus',
        title: 'Differential Calculus',
        subject: 'Mathematics',
        type: 'chapter',
        price: 699,
        originalPrice: 999,
        duration: '20 hours',
        chapters: 8,
        instructor: 'Prof. Vikram Singh',
        rating: 4.9,
        students: 1450,
        image: 'abs',
        description: 'Master differential calculus with limits, derivatives, and applications in physics and engineering.',
        features: [
        'Limit evaluations',
        'Derivative applications',
        'Optimization problems',
        'Graphical analysis'
        ]
    },
    {
        id: 'math-full',
        title: 'Complete Mathematics Course',
        subject: 'Mathematics',
        type: 'full',
        price: 4599,
        originalPrice: 6999,
        duration: '160 hours',
        chapters: 30,
        instructor: 'Prof. Vikram Singh',
        rating: 4.9,
        students: 2500,
        image: 'abs',
        description: 'Complete JEE Mathematics preparation with algebra, calculus, coordinate geometry, and more.',
        features: [
        'All JEE Math topics',
        'Advanced techniques',
        'Shortcut methods',
        'Problem-solving strategies'
        ]
    }
    ];

    // Module Data
    const modulesData: Course[] = [
    {
        id: 'phy-module-mechanics',
        title: 'Mechanics Module - Complete Foundation',
        subject: 'Physics',
        type: 'chapter',
        price: 899,
        originalPrice: 1299,
        duration: '25 hours',
        chapters: 8,
        instructor: 'Dr. Rajesh Sharma',
        rating: 4.9,
        students: 850,
        image: 'abs',
        description: 'Complete mechanics module covering kinematics, dynamics, work-energy theorem, and rotational motion.',
        features: [
        'Comprehensive theory coverage',
        'Advanced problem solving',
        'Real-world applications',
        'Practice worksheets'
        ]
    },
    {
        id: 'phy-module-waves',
        title: 'Waves & Oscillations Module',
        subject: 'Physics',
        type: 'chapter',
        price: 749,
        originalPrice: 999,
        duration: '20 hours',
        chapters: 6,
        instructor: 'Prof. Anita Gupta',
        rating: 4.8,
        students: 720,
        image: 'abs',
        description: 'Master wave motion, sound waves, and oscillatory systems with detailed mathematical analysis.',
        features: [
        'Wave equations mastery',
        'Sound wave properties',
        'Resonance phenomena',
        'Laboratory simulations'
        ]
    },
    {
        id: 'phy-module-full',
        title: 'Complete Physics Mastery Module',
        subject: 'Physics',
        type: 'full',
        price: 4999,
        originalPrice: 7999,
        duration: '180 hours',
        chapters: 25,
        instructor: 'Dr. Rajesh Sharma',
        rating: 4.9,
        students: 1200,
        image: 'abs',
        description: 'Ultimate physics preparation module covering all JEE topics with advanced problem-solving techniques.',
        features: [
        'All physics concepts',
        'Advanced problem sets',
        'Mock test series',
        'Personal mentoring'
        ]
    },
    {
        id: 'chem-module-organic',
        title: 'Organic Chemistry Mastery Module',
        subject: 'Chemistry',
        type: 'chapter',
        price: 949,
        originalPrice: 1399,
        duration: '30 hours',
        chapters: 10,
        instructor: 'Dr. Priya Mehta',
        rating: 4.8,
        students: 680,
        image: 'abs',
        description: 'Comprehensive organic chemistry module with reaction mechanisms and synthesis strategies.',
        features: [
        'Reaction mechanism deep dive',
        'Organic synthesis planning',
        'Named reactions mastery',
        'Structure determination'
        ]
    },
    {
        id: 'math-module-calculus',
        title: 'Advanced Calculus Module',
        subject: 'Mathematics',
        type: 'chapter',
        price: 1099,
        originalPrice: 1599,
        duration: '35 hours',
        chapters: 12,
        instructor: 'Prof. Vikram Singh',
        rating: 4.9,
        students: 950,
        image: 'abs',
        description: 'Master differential and integral calculus with applications in physics and engineering.',
        features: [
        'Differential calculus mastery',
        'Integration techniques',
        'Applications in physics',
        'Optimization problems'
        ]
    }
    ];

    // Components
    const CourseCard = ({ course, onAddToCart, isInCart }: { course: Course; onAddToCart: (course: CartItem) => void; isInCart: boolean }) => {
    const subjectColors = {
        Physics: 'bg-red-100 text-red-800',
        Chemistry: 'bg-green-100 text-green-800',
        Mathematics: 'bg-blue-100 text-blue-800'
    };

    const handleAddToCart = () => {
        onAddToCart({
        id: course.id,
        title: course.title,
        price: course.price,
        type: course.type,
        subject: course.subject,
        image: course.image
        });
    };

    return (
        <Card className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300 group">
        <CardHeader className="p-0">
            <div className="relative">
            <img 
                src={course.image} 
                alt={course.title}
                className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="absolute top-3 left-3 flex gap-2">
                <Badge className={subjectColors[course.subject]}>
                {course.subject}
                </Badge>
                <Badge variant={course.type === 'full' ? 'default' : 'secondary'}>
                {course.type === 'full' ? 'Full Course' : 'Chapter'}
                </Badge>
            </div>
            {course.originalPrice && (
                <div className="absolute top-3 right-3 bg-red-500 text-white px-2 py-1 rounded text-sm font-bold">
                {Math.round(((course.originalPrice - course.price) / course.originalPrice) * 100)}% OFF
                </div>
            )}
            </div>
        </CardHeader>

        <CardContent className="flex-1 p-4">
            <h3 className="font-semibold text-lg mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
            {course.title}
            </h3>
            
            <p className="text-gray-600 text-sm mb-3 line-clamp-2">
            {course.description}
            </p>

            <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
            <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {course.duration}
            </div>
            <div className="flex items-center gap-1">
                <BookOpen className="h-4 w-4" />
                {course.chapters} chapters
            </div>
            </div>

            <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-1">
                <Star className="h-4 w-4 text-yellow-400 fill-current" />
                <span className="font-medium">{course.rating}</span>
                <span className="text-gray-500">({course.students})</span>
            </div>
            <div className="flex items-center gap-1 text-sm text-gray-500">
                <Users className="h-4 w-4" />
                {course.students} students
            </div>
            </div>

            <div className="text-sm text-gray-600 mb-3">
            By <span className="font-medium">{course.instructor}</span>
            </div>

            <div className="space-y-1 mb-4">
            {course.features.slice(0, 2).map((feature, index) => (
                <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                <Check className="h-3 w-3 text-green-500" />
                {feature}
                </div>
            ))}
            </div>
        </CardContent>

        <CardFooter className="p-4 pt-0">
            <div className="w-full">
            <div className="flex items-center justify-between mb-3">
                <div>
                {course.originalPrice && (
                    <span className="text-gray-400 line-through text-lg mr-2">
                    ₹{course.originalPrice}
                    </span>
                )}
                <span className="text-2xl font-bold text-blue-600">
                    ₹{course.price}
                </span>
                </div>
            </div>
            
            <Button 
                className={`w-full ${isInCart 
                ? 'bg-green-600 hover:bg-green-700' 
                : 'bg-blue-600 hover:bg-blue-700'
                }`}
                onClick={handleAddToCart}
                disabled={isInCart}
            >
                {isInCart ? (
                <>
                    <Check className="h-4 w-4 mr-2" />
                    Added to Cart
                </>
                ) : (
                'Add to Cart'
                )}
            </Button>
            </div>
        </CardFooter>
        </Card>
    );
    };

    const Cart = ({ isOpen, onClose, items, onRemoveItem, totalPrice }: {
    isOpen: boolean;
    onClose: () => void;
    items: CartItem[];
    onRemoveItem: (courseId: string) => void;
    totalPrice: number;
    }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose}></div>
        
        <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl">
            <div className="flex flex-col h-full">
            <div className="flex items-center justify-between p-4 border-b">
                <h2 className="text-lg font-semibold flex items-center gap-2">
                <ShoppingCart className="h-5 w-5" />
                Study Cart ({items.length})
                </h2>
                <Button variant="ghost" size="sm" onClick={onClose}>
                <X className="h-5 w-5" />
                </Button>
            </div>

            <div className="flex-1 overflow-y-auto p-4">
                {items.length === 0 ? (
                <div className="text-center py-8">
                    <ShoppingCart className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                    <p className="text-gray-500">Your study cart is empty</p>
                    <p className="text-sm text-gray-400 mt-2">Add some courses to get started!</p>
                </div>
                ) : (
                <div className="space-y-4">
                    {items.map((item) => (
                    <div key={item.id} className="flex gap-3 p-3 border rounded-lg">
                        {item.image && (
                        <img 
                            src={item.image} 
                            alt={item.title}
                            className="w-16 h-16 object-cover rounded"
                        />
                        )}
                        <div className="flex-1">
                        <h3 className="font-medium text-sm line-clamp-2">{item.title}</h3>
                        <div className="flex items-center gap-2 mt-1">
                            <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                            {item.subject}
                            </span>
                            <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded">
                            {item.type === 'full' ? 'Full Course' : 'Chapter'}
                            </span>
                        </div>
                        <div className="flex items-center justify-between mt-2">
                            <span className="font-semibold text-blue-600">₹{item.price}</span>
                            <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => onRemoveItem(item.id)}
                            className="h-8 w-8 p-0 text-red-500 hover:text-red-700"
                            >
                            <Trash2 className="h-4 w-4" />
                            </Button>
                        </div>
                        </div>
                    </div>
                    ))}
                </div>
                )}
            </div>

            {items.length > 0 && (
                <div className="border-t p-4 space-y-4">
                <div className="flex items-center justify-between text-lg font-semibold">
                    <span>Total:</span>
                    <span className="text-blue-600">₹{totalPrice}</span>
                </div>
                
                <div className="space-y-2">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700" size="lg">
                    Proceed to Checkout
                    </Button>
                    <Button variant="outline" className="w-full" onClick={onClose}>
                    Continue Learning
                    </Button>
                </div>
                
                <div className="text-xs text-gray-500 text-center">
                    Secure checkout with SSL encryption
                </div>
                </div>
            )}
            </div>
        </div>
        </div>
    );
    };

    // Main Component
    const MyCourses = () => {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [selectedSubject, setSelectedSubject] = useState<string>('All');
    const [selectedType, setSelectedType] = useState<string>('All');
    const [currentSection, setCurrentSection] = useState<'courses' | 'modules'>('courses');

    const subjects = ['All', 'Physics', 'Chemistry', 'Mathematics'];
    const types = ['All', 'chapter', 'full'];

    const addToCart = (item: CartItem) => {
        setCartItems(prev => {
        const exists = prev.find(cartItem => cartItem.id === item.id);
        if (exists) return prev;
        return [...prev, item];
        });
    };

    const removeFromCart = (itemId: string) => {
        setCartItems(prev => prev.filter(item => item.id !== itemId));
    };

    const getTotalPrice = () => {
        return cartItems.reduce((total, item) => total + item.price, 0);
    };

    const isInCart = (courseId: string) => {
        return cartItems.some(item => item.id === courseId);
    };

    const currentData = currentSection === 'courses' ? coursesData : modulesData;
    const filteredData = currentData.filter(item => {
        const subjectMatch = selectedSubject === 'All' || item.subject === selectedSubject;
        const typeMatch = selectedType === 'All' || item.type === selectedType;
        return subjectMatch && typeMatch;
    });

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
        {/* Navbar */}
        <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
 

      {/* Header (Left) */}
      <Header />

      

    
</nav>


        {/* Hero Section */}
      
        <section className="bg-gradient-to-r mt-20 from-blue-600 to-blue-800 text-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Master JEE with Expert Courses
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Comprehensive chapter-wise modules for Physics, Chemistry & Mathematics
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
                <div className="bg-white/10 backdrop-blur rounded-lg px-6 py-3">
                <div className="font-bold text-2xl">50+</div>
                <div className="text-blue-100">Expert Faculty</div>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-lg px-6 py-3">
                <div className="font-bold text-2xl">95%</div>
                <div className="text-blue-100">Success Rate</div>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-lg px-6 py-3">
                <div className="font-bold text-2xl">1000+</div>
                <div className="text-blue-100">JEE Qualifiers</div>
                </div>
            </div>
            </div>
        </section>

        {/* Section Toggle */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
            <div className="flex justify-center mb-8">
            <div className="bg-gray-100 p-1 rounded-lg">
                <Button
                variant={currentSection === 'courses' ? 'default' : 'ghost'}
                onClick={() => setCurrentSection('courses')}
                className={currentSection === 'courses' ? 'bg-blue-600 hover:bg-blue-700' : ''}
                >
                Courses
                </Button>
                <Button
                variant={currentSection === 'modules' ? 'default' : 'ghost'}
                onClick={() => setCurrentSection('modules')}
                className={currentSection === 'modules' ? 'bg-blue-600 hover:bg-blue-700' : ''}
                >
                Modules
                </Button>
                {/* Cart Button (Right) */}
      <Button
        variant="ghost"
        size="sm"
        className="relative"
        onClick={() => setIsCartOpen(true)}
      >
        <ShoppingCart className="h-5 w-5" />
        {cartItems.length > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
            {cartItems.length}
          </span>
        )}
      </Button>
            </div>
            </div>
        </div>

        {/* Main Content */}
        <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {currentSection === 'courses' ? (
                <>Choose Your <span className="text-blue-600">Learning Path</span></>
                ) : (
                <>Learning <span className="text-blue-600">Modules</span></>
                )}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                {currentSection === 'courses' ? 
                'From individual chapters to complete courses - find the perfect fit for your JEE preparation' :
                'Comprehensive learning modules designed for intensive JEE preparation with advanced concepts'
                }
            </p>
            </div>

            {/* Filters */}
            <div className="mb-8 flex flex-wrap gap-4 justify-center">
            <div className="flex flex-wrap gap-2">
                <span className="text-sm font-medium text-gray-700 mr-2 flex items-center">Subject:</span>
                {subjects.map(subject => (
                <Button
                    key={subject}
                    variant={selectedSubject === subject ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedSubject(subject)}
                    className={selectedSubject === subject ? "bg-blue-600 hover:bg-blue-700" : ""}
                >
                    {subject}
                </Button>
                ))}
            </div>
            
            <div className="flex flex-wrap gap-2">
                <span className="text-sm font-medium text-gray-700 mr-2 flex items-center">Type:</span>
                {types.map(type => (
                <Button
                    key={type}
                    variant={selectedType === type ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedType(type)}
                    className={selectedType === type ? "bg-blue-600 hover:bg-blue-700" : ""}
                >
                    {type === 'chapter' ? (currentSection === 'courses' ? 'Chapter-wise' : 'Module-wise') : type === 'full' ? (currentSection === 'courses' ? 'Full Course' : 'Full Module') : 'All'}
                </Button>
                ))}
            </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredData.map(item => (
                <CourseCard
                key={item.id}
                course={item}
                onAddToCart={addToCart}
                isInCart={isInCart(item.id)}
                />
            ))}
            </div>
        </section>

        {/* Cart */}
        <Cart 
            isOpen={isCartOpen}
            onClose={() => setIsCartOpen(false)}
            items={cartItems}
            onRemoveItem={removeFromCart}
            totalPrice={getTotalPrice()}
        />
        </div>
    );
    };

    export default MyCourses;
