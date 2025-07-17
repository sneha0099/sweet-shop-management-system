import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Star,
  ArrowRight,
  Package,
  Flower,
  Leaf,
} from "lucide-react";

const Homepage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-stone-100 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-10 text-slate-300 opacity-20">
            <Flower className="h-32 w-32 transform rotate-45" />
          </div>
          <div className="absolute top-1/3 right-20 text-stone-300 opacity-15">
            <Leaf className="h-24 w-24 transform -rotate-12" />
          </div>
          <div className="absolute bottom-20 left-1/4 text-gray-300 opacity-10">
            <Flower className="h-40 w-40 transform rotate-12" />
          </div>
          <div className="absolute bottom-1/3 right-1/3 text-slate-300 opacity-20">
            <Leaf className="h-28 w-28 transform rotate-45" />
          </div>
        </div>

        {/* Header */}
        <header className="bg-white/90 backdrop-blur-md shadow-lg border-b border-gray-200 relative z-10">
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="bg-gradient-to-r from-slate-700 to-gray-800 p-2 rounded-xl shadow-lg">
                  <Flower className="h-8 w-8 text-white" />
                </div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-slate-700 to-gray-800 bg-clip-text text-transparent">
                  Blooming Sweets
                </h1>
              </div>
              <Button
                onClick={() => navigate("/inventory")}
                className="bg-gradient-to-r from-slate-700 to-gray-800 hover:from-slate-800 hover:to-gray-900 text-white shadow-lg"
              >
                <Package className="h-4 w-4 mr-2" />
                View Inventory
              </Button>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="py-20 px-6 relative z-10">
          <div className="container mx-auto text-center">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center justify-center mb-6">
                <Flower className="h-16 w-16 text-slate-600 mr-4" />
                <h2 className="text-6xl font-bold text-slate-800 leading-tight">
                  Blooming
                  <span className="bg-gradient-to-r from-slate-600 to-gray-700 bg-clip-text text-transparent">
                    {" "}
                    Sweets
                  </span>
                </h2>
                <Leaf className="h-12 w-12 text-stone-500 ml-4 transform rotate-12" />
              </div>
              <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
                Where nature's beauty meets culinary artistry. Our handcrafted
                sweets are inspired by the delicate elegance of blooming
                gardens, bringing you treats as beautiful as they are delicious.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={() => navigate("/inventory")}
                  size="lg"
                  className="bg-gradient-to-r from-slate-700 to-gray-800 hover:from-slate-800 hover:to-gray-900 text-white shadow-xl px-8 py-4 text-lg"
                >
                  <Flower className="h-5 w-5 mr-2" />
                  Explore Our Garden
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-6 relative z-10">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-4">
                <Leaf className="h-8 w-8 text-slate-600 mr-3" />
                <h3 className="text-4xl font-bold text-slate-800">
                  Nature-Inspired Excellence
                </h3>
                <Flower className="h-8 w-8 text-stone-500 ml-3" />
              </div>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Our commitment to natural beauty and artisanal craftsmanship
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-white/80 backdrop-blur-sm shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group">
                <CardHeader className="text-center">
                  <div className="bg-gradient-to-r from-slate-700 to-gray-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Star className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-slate-800">
                    Artisan Quality
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 text-center">
                    Like delicate petals carefully crafted by nature, our sweets
                    are made with meticulous attention to detail and the finest
                    natural ingredients.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/80 backdrop-blur-sm shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group">
                <CardHeader className="text-center">
                  <div className="bg-gradient-to-r from-stone-600 to-slate-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Flower className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-slate-800">
                    Garden Variety
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 text-center">
                    From rich chocolate blooms to fruity floral essences, our
                    diverse collection mirrors the beauty and variety found in
                    nature's garden.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/80 backdrop-blur-sm shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group">
                <CardHeader className="text-center">
                  <div className="bg-gradient-to-r from-gray-700 to-stone-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Leaf className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-slate-800">
                    Natural Elegance
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 text-center">
                    Experience the perfect harmony of taste and presentation,
                    where every sweet is a work of art inspired by nature's
                    timeless beauty.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 px-6 bg-gradient-to-r from-slate-800 to-gray-900 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-5 left-10 text-slate-600 opacity-20">
              <Flower className="h-20 w-20 transform rotate-12" />
            </div>
            <div className="absolute bottom-5 right-10 text-gray-600 opacity-15">
              <Leaf className="h-24 w-24 transform -rotate-45" />
            </div>
          </div>
          <div className="container mx-auto text-center relative z-10">
            <div className="flex items-center justify-center mb-6">
              <Leaf className="h-8 w-8 text-slate-300 mr-3" />
              <h3 className="text-4xl font-bold text-white">
                Step Into Our Sweet Garden
              </h3>
              <Flower className="h-8 w-8 text-gray-300 ml-3" />
            </div>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Discover our complete collection of nature-inspired confections,
              each carefully catalogued with detailed information about
              ingredients, pricing, and availability.
            </p>
            <Button
              onClick={() => navigate("/inventory")}
              size="lg"
              className="bg-white text-slate-800 hover:bg-gray-100 shadow-xl px-8 py-4 text-lg font-semibold"
            >
              <Flower className="h-5 w-5 mr-2" />
              Browse Our Collection
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Homepage;
